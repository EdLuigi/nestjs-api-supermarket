import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PermissionsModule } from './permissions/permissions.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { RolesModule } from './roles/roles.module';
import { RolesPermissionsModule } from './roles_permissions/roles_permissions.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { UsersModule } from './users/users.module';
import { UsersRolesModule } from './users_roles/users_roles.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        secure: false,
        dnsTimeout: 1000 * 0.1,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      },
    }),
    PrismaModule,
    UsersModule,
    AuthModule,
    RolesModule,
    PermissionsModule,
    UsersRolesModule,
    RolesPermissionsModule,
    SuppliersModule,
    ProductsModule,
  ],
})
export class AppModule {}
