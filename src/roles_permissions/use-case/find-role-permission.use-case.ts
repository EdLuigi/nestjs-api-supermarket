import { Injectable } from '@nestjs/common';
import { RolesPermissionsService } from '../service/roles_permissions.service';

@Injectable()
export class FindOneRolePermissionUseCase {
  constructor(private rolePermissionsService: RolesPermissionsService) {}

  async execute(id: number) {
    return await this.rolePermissionsService.findOne(id);
  }
}
