import { DuplicateKeyValueError } from '@/common/error/duplicate-key-value.error';
import { NotFoundPermissionError } from '@/common/error/not-found-permission.error';
import { NotFoundRoleError } from '@/common/error/not-found-role.error';
import { PermissionsService } from '@/permissions/service/permissions.service';
import { RolesService } from '@/roles/service/roles.service';
import { Injectable } from '@nestjs/common';
import { CreateRolePermissionDto } from '../dto/create-role_permission.dto';
import { RolesPermissionsService } from '../service/roles_permissions.service';

@Injectable()
export class CreateRolePermissionUseCase {
  constructor(
    private rolePermissionsService: RolesPermissionsService,
    private rolesService: RolesService,
    private permissionsService: PermissionsService,
  ) {}

  async execute(rolePermissionData: CreateRolePermissionDto) {
    const roleExists = await this.rolesService.findOne(
      rolePermissionData.roleId,
    );
    if (!roleExists) throw new NotFoundRoleError();

    const permissionExists = await this.permissionsService.findOne(
      rolePermissionData.permissionId,
    );
    if (!permissionExists) throw new NotFoundPermissionError();

    const rolePermissionExists =
      await this.rolePermissionsService.findByBothIds(
        rolePermissionData.roleId,
        rolePermissionData.permissionId,
      );
    if (rolePermissionExists)
      throw new DuplicateKeyValueError('roleId, permissionId');

    return await this.rolePermissionsService.create(rolePermissionData);
  }
}
