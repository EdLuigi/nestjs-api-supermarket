import { NotFoundRolePermissionError } from '@/common/error/not-found-role-permission.error';
import { Injectable } from '@nestjs/common';
import { RolesPermissionsService } from '../service/roles_permissions.service';

@Injectable()
export class RemoveRolePermissionUseCase {
  constructor(private rolePermissionsService: RolesPermissionsService) {}

  async execute(id: number) {
    const rolePermissionExists = await this.rolePermissionsService.findOne(id);
    if (!rolePermissionExists) throw new NotFoundRolePermissionError();

    return await this.rolePermissionsService.remove(id);
  }
}
