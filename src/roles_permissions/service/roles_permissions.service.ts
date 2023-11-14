import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateRolePermissionDto } from '../dto/create-role_permission.dto';

@Injectable()
export class RolesPermissionsService {
  constructor(private prisma: PrismaService) {}

  async create(createRolesPermissionDto: CreateRolePermissionDto) {
    return await this.prisma.rolePermission.create({
      data: {
        roleId: createRolesPermissionDto.roleId,
        permissionId: createRolesPermissionDto.permissionId,
        createdAt: new Date(),
      },
    });
  }

  async findAll() {
    return await this.prisma.rolePermission.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.rolePermission.findFirst({ where: { id } });
  }

  async findByBothIds(roleId: number, permissionId: number) {
    return await this.prisma.rolePermission.findFirst({
      where: {
        AND: [{ permissionId }, { roleId }],
      },
    });
  }

  async findByPermissionId(permissionId: number) {
    return await this.prisma.rolePermission.findMany({
      where: { permissionId },
    });
  }

  async findByRoleId(roleId: number) {
    return await this.prisma.rolePermission.findMany({ where: { roleId } });
  }

  async remove(id: number) {
    await this.prisma.rolePermission.delete({
      where: { id },
    });
  }
}
