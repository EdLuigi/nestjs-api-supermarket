import { PrismaService } from '@/prisma/prisma.service';
import { User } from '@/users/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';
import { SignupDto } from '../dto/signup.dto';
import { EmailToken } from '../entities/email-token.entity';

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
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = { sub: userId, email };
    const secret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: secret,
    });

    return { access_token: token };
  }

  async createEmailToken(userId: number, email: string): Promise<EmailToken> {
    const dueDateTime = new Date();
    const expireLimit = 30;
    dueDateTime.setMinutes(dueDateTime.getMinutes() + expireLimit);

    return await this.prisma.emailToken.create({
      data: {
        userId: userId,
        email: email,
        createdAt: new Date(),
        dueDate: dueDateTime,
      },
    });
  }

  async findEmailToken(token: string) {
    return await this.prisma.emailToken.findFirst({ where: { id: token } });
  }

  async verifyEmail(id: number) {
    return await this.prisma.user.update({
      where: { id },
      data: { verified: true },
    });
  }

  async removeEmailToken(token: string) {
    await this.prisma.emailToken.delete({ where: { id: token } });
  }

  async removeEmailTokenByUserId(userId: number) {
    await this.prisma.emailToken.delete({ where: { userId } });
  }
}
