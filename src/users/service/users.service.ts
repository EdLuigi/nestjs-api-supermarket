import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.user.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }

  async findMe(id: number) {
    const user = await this.prisma.user.findFirst({ where: { id } });
    const userRole = await this.prisma.userRole.findFirst({
      where: { userId: id },
    });
    const roleInfo = await this.prisma.role.findFirst({
      where: { id: userRole.roleId },
    });
    const userRolePermissions = await this.prisma.rolePermission.findMany({
      where: { roleId: userRole.roleId },
    });
    const permissions = await this.prisma.permission.findMany();

    const permissionsNames = userRolePermissions.map((item) => {
      const objects = permissions.find((i) => i.id === item.permissionId);
      return objects.name;
    });

    return {
      ...user,
      role: roleInfo.name,
      permissions: permissionsNames.sort(),
    };
  }

  async findOne(id: number) {
    return await this.prisma.user.findFirst({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.prisma.user.update({
      where: { id },
      data: {
        ...updateUserDto,
        updatedAt: new Date(),
      },
    });
  }

  async remove(id: number) {
    // TODO: CREATE "REMOVE USER_ROLE" FUNCTION IN USERS_ROLES MODULE
    const userRole = await this.prisma.userRole.findFirst({
      where: { userId: id },
    });
    await this.prisma.userRole.delete({ where: { id: userRole.id } });

    await this.prisma.user.delete({
      where: { id },
    });
  }

  // TODO: CREATE "FIND BY REGISTRY" FUNCTION TO USE IN AUTH
}
