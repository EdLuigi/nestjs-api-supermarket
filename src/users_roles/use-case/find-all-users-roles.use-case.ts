import { Injectable } from '@nestjs/common';
import { UsersRolesService } from '../service/users_roles.service';

@Injectable()
export class FindAllUsersRolesUseCase {
  constructor(private usersRolesService: UsersRolesService) {}

  async execute() {
    return await this.usersRolesService.findAll();
  }
}
