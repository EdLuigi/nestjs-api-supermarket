import { PrismaService } from '@/prisma/prisma.service';
import { User } from '@/users/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';
import { SignupDto } from '../dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: SignupDto): Promise<User> {
    const hash = await argon.hash(dto.password);

    return await this.prisma.user.create({
      data: {
        name: dto.name,
        email: dto.email,
        registry: dto.registry,
        password: hash,
        createdAt: new Date(),
      },
    });
  }

  async signToken(
    userId: number,
    registry: string,
  ): Promise<{ access_token: string }> {
    const payload = { sub: userId, registry };
    const secret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: secret,
    });

    return { access_token: token };
  }
}
