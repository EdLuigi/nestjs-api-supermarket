import { BadFormatError } from '@/common/error/bad-format.error';
import { ForeignKeyPermissionError } from '@/common/error/foreign-key-permission-error';
import { NotFoundPermissionError } from '@/common/error/not-found-permission.error';
import { RolesPermissionsService } from '@/roles_permissions/service/roles_permissions.service';
import { Injectable } from '@nestjs/common';
import { PermissionsService } from '../service/permissions.service';

@Injectable()
export class RemovePermissionUseCase {
  constructor(
    private permissionsService: PermissionsService,
    private rolesPermissionsService: RolesPermissionsService,
  ) {}

  async execute(id: number) {
    if (!Number.isInteger(+id)) throw new BadFormatError('id');

    const permissionExists = await this.permissionsService.findOne(id);
    if (!permissionExists) throw new NotFoundPermissionError();

    const hasForeignKeys =
      await this.rolesPermissionsService.findByPermissionId(id);
    if (hasForeignKeys.length > 0) throw new ForeignKeyPermissionError();

    return await this.permissionsService.remove(id);
  }
}
