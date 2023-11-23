import { Injectable } from '@nestjs/common';
import { UsersRolesService } from '../service/users_roles.service';

@Injectable()
export class FindUserRoleUseCase {
  constructor(private usersRolesService: UsersRolesService) {}

  async execute(id: number) {
    return await this.usersRolesService.findOne(id);
  }
}
