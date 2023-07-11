import { Injectable } from '@nestjs/common';
import { CreateRolesPermissionDto } from '../dto/create-roles_permission.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { RolesService } from 'src/roles/service/roles.service';
import { PermissionsService } from 'src/permissions/service/permissions.service';

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

    return await this.prisma.role_Permission.create({
      data: {
        roleId: createRolesPermissionDto.roleId,
        permissionId: createRolesPermissionDto.permissionId,
        createdAt: new Date(),
      },
    });
  }

  findAll() {
    return this.prisma.role_Permission.findMany();
  }

  findOne(id: number) {
    if (isNaN(id)) return null;
    return this.prisma.role_Permission.findFirst({ where: { id } });
  }

  async remove(id: number) {
    if (isNaN(id)) return null;
    const role_Permission = await this.prisma.role_Permission.findFirst({
      where: { id },
    });

    if (!role_Permission) return;

    await this.prisma.role_Permission.delete({
      where: { id },
    });
  }
}
