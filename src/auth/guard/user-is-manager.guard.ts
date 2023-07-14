import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class UserIsManagerGuard implements CanActivate {
  constructor(private prisma: PrismaService) {}

  async validateUser(user: User) {
    const userRole = await this.prisma.user.findFirst({
      where: { id: user.id },
      include: {
        users_roles: true,
      },
    });
    const userRoleId = userRole.users_roles[0].roleId;

    const role = await this.prisma.role.findFirst({
      where: { id: userRoleId },
    });

    if (
      !role ||
      (role.name.toLowerCase() !== 'manager' &&
        role.name.toLowerCase() !== 'admin')
    ) {
      return false;
    }

    return true;
  }

  canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user: User = request.user;
    return this.validateUser(user);
  }
}
