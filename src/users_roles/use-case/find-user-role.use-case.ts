import { BadFormatError } from '@/common/error/bad-format.error';
import { Injectable } from '@nestjs/common';
import { UsersRolesService } from '../service/users_roles.service';

@Injectable()
export class FindUserRoleUseCase {
  constructor(private usersRolesService: UsersRolesService) {}

  async execute(id: number) {
    if (Number.isInteger(+id)) throw new BadFormatError('id');

    return await this.usersRolesService.findOne(id);
  }
}
