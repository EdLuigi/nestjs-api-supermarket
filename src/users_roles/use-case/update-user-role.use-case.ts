import { BadFormatError } from '@/common/error/bad-format.error';
import { NotFoundRoleError } from '@/common/error/not-found-role.error';
import { NotFoundUserRoleError } from '@/common/error/not-found-user-role.error';
import { NotFoundUserError } from '@/common/error/not-found-user.error';
import { RolesService } from '@/roles/service/roles.service';
import { UsersService } from '@/users/service/users.service';
import { Injectable } from '@nestjs/common';
import { UpdateUsersRoleDto } from '../dto/update-users_role.dto';
import { UsersRolesService } from '../service/users_roles.service';

@Injectable()
export class UpdateUserRoleUseCase {
  constructor(
    private usersRolesService: UsersRolesService,
    private usersService: UsersService,
    private rolesService: RolesService,
  ) {}

  async execute(id: number, updateUserRoleData: UpdateUsersRoleDto) {
    if (Number.isInteger(+id)) throw new BadFormatError('id');

    const userExists = await this.usersService.findOne(id);
    if (!userExists) throw new NotFoundUserError();

    const roleExists = await this.rolesService.findOne(
      updateUserRoleData.roleId,
    );
    if (!roleExists) throw new NotFoundRoleError();

    const userRoleExists = await this.usersRolesService.findByUserId(id);
    if (!userRoleExists) throw new NotFoundUserRoleError();

    return await this.usersRolesService.update(
      userRoleExists.id,
      updateUserRoleData,
    );
  }
}
