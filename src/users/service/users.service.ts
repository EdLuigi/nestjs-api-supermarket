import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.user
      .findMany
      // {
      //   orderBy: {
      //     id: 'asc',
      //   },
      // }
      ();
  }

  async findMe(id: number) {
    if (isNaN(id)) return null;
    const user = await this.prisma.user.findFirst({ where: { id } });
    const userRole = await this.prisma.user_Role.findFirst({
      where: { userId: id },
    });
    const roleInfo = await this.prisma.role.findFirst({
      where: { id: userRole.id },
    });
    const userRolePermissions = await this.prisma.role_Permission.findMany({
      where: { roleId: userRole.id },
    });
    const permissions = await this.prisma.permission.findMany();

    const permissionsNames = userRolePermissions.map((item) => {
      const objects = permissions.find((i) => i.id === item.permissionId);
      return objects.name;
    });

    return {
      ...user,
      role: roleInfo.name,
      permissions: permissionsNames,
    };
  }

  findOne(id: number) {
    if (isNaN(id)) return null;
    return this.prisma.user.findFirst({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (isNaN(id)) return null;

    return this.prisma.user.update({
      where: { id },
      data: {
        ...updateUserDto,
        updatedAt: new Date(),
      },
    });
  }

  async remove(id: number) {
    if (isNaN(id)) return null;
    const user = await this.prisma.user.findFirst({
      where: { id },
    });

    if (!user) return;

    await this.prisma.user.delete({
      where: { id },
    });
  }
}
