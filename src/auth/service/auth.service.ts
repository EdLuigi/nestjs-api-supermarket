import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import * as argon from 'argon2';
import { PrismaService } from '@/prisma/prisma.service';
import { UsersRole } from '@/users_roles/entities/users_role.entity';
import { SigninDto } from '../dto/signin.dto';
import { SignupDto } from '../dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: SignupDto) {
    const hash = await argon.hash(dto.password);
    try {
      const user = await this.prisma.user.create({
        data: {
          name: dto.name,
          email: dto.email,
          registry: dto.registry,
          password: hash,
          createdAt: new Date(),
        },
      });

      const newUserRole: UsersRole = {
        userId: user.id,
        roleId: 3,
        createdAt: new Date(),
      };

      await this.prisma.userRole.create({ data: newUserRole });

      return this.signToken(user.id, user.registry);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }

  async signin(dto: SigninDto) {
    // const user = await this.prisma.user.findUnique({
    const user = await this.prisma.user.findFirst({
      where: {
        registry: dto.registry,
      },
    });
    if (!user) throw new ForbiddenException('Credentials incorrect');

    const pwMatches = await argon.verify(user.password, dto.password);
    if (!pwMatches) throw new ForbiddenException('Credentials incorrect');

    return this.signToken(user.id, user.registry);
  }

  async signToken(
    userId: number,
    registry: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      registry,
    };
    const secret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: secret,
    });

    return {
      access_token: token,
    };
  }
}
