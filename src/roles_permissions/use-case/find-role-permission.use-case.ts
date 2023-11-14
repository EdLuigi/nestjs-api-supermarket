import { BadFormatError } from '@/common/error/bad-format.error';
import { Injectable } from '@nestjs/common';
import { RolesPermissionsService } from '../service/roles_permissions.service';

@Injectable()
export class FindOneRolePermissionUseCase {
  constructor(private rolePermissionsService: RolesPermissionsService) {}

  async execute(id: number) {
    if (!Number.isInteger(+id)) throw new BadFormatError('id');

    return await this.rolePermissionsService.findOne(id);
  }
}
