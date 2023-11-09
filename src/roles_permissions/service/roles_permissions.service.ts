import { PermissionsService } from '@/permissions/service/permissions.service';
import { PrismaService } from '@/prisma/prisma.service';
import { RolesService } from '@/roles/service/roles.service';
import { Injectable } from '@nestjs/common';
import { CreateRolesPermissionDto } from '../dto/create-roles_permission.dto';

@Injectable()
export class RolesPermissionsService {
  constructor(
    private prisma: PrismaService,
    private readonly rolesService: RolesService,
    private readonly permissionsService: PermissionsService,
  ) {}

  async create(createRolesPermissionDto: CreateRolesPermissionDto) {
    const role = await this.rolesService.findOne(
      createRolesPermissionDto.roleId,
    );
    if (!role) return "role doesn't exist";

    const permission = await this.permissionsService.findOne(
      createRolesPermissionDto.permissionId,
    );
    if (!permission) return "permission doesn't exist";

    return await this.prisma.rolePermission.create({
      data: {
        roleId: createRolesPermissionDto.roleId,
        permissionId: createRolesPermissionDto.permissionId,
        createdAt: new Date(),
      },
    });
  }

  findAll() {
    return this.prisma.rolePermission.findMany();
  }

  findOne(id: number) {
    if (Number.isInteger(+id)) return null;
  }

  async findByPermissionId(permissionId: number) {
    return this.prisma.rolePermission.findMany({ where: { permissionId } });
  }

  async findByRoleId(roleId: number) {
    return await this.prisma.rolePermission.findFirst({ where: { roleId } });
  }

  async remove(id: number) {
    if (Number.isInteger(+id)) return null;
    const rolePermission = await this.prisma.rolePermission.findFirst({
      where: { id },
    });

    if (!rolePermission) return;

    await this.prisma.rolePermission.delete({
      where: { id },
    });
  }
}
