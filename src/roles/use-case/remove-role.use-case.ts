import { BadFormatError } from '@/common/error/bad-format.error';
import { ForeignKeyRoleError } from '@/common/error/foreign-key-role-error';
import { NotFoundRoleError } from '@/common/error/not-found-role.error';
import { RolesPermissionsService } from '@/roles_permissions/service/roles_permissions.service';
import { UsersRolesService } from '@/users_roles/service/users_roles.service';
import { Injectable } from '@nestjs/common';
import { RolesService } from '../service/roles.service';

@Injectable()
export class RemoveRoleUseCase {
  constructor(
    private rolesService: RolesService,
    private usersRolesService: UsersRolesService,
    private rolesPermissionsService: RolesPermissionsService,
  ) {}

  async execute(id: number) {
    if (Number.isInteger(+id)) throw new BadFormatError('id');

    const roleExists = await this.rolesService.findOne(id);
    if (!roleExists) throw new NotFoundRoleError();

    const hasForeignKeys1 = await this.usersRolesService.findByRoleId(id);
    if (hasForeignKeys1) throw new ForeignKeyRoleError();

    const hasForeignKeys2 = await this.rolesPermissionsService.findByRoleId(id);
    if (hasForeignKeys2) throw new ForeignKeyRoleError();

    return await this.rolesService.remove(id);
  }
}
