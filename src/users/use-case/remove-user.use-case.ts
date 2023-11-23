import { NotFoundUserError } from '@/common/error/not-found-user.error';
import { UsersRolesService } from '@/users_roles/service/users_roles.service';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../service/users.service';

@Injectable()
export class RemoveUserUseCase {
  constructor(
    private usersService: UsersService,
    private usersRolesService: UsersRolesService,
  ) {}

  async execute(id: number) {
    const userExists = await this.usersService.findOne(id);
    if (!userExists) throw new NotFoundUserError();

    const userRole = await this.usersRolesService.findByUserId(id);
    if (!!userRole) await this.usersRolesService.remove(userRole.id);

    return await this.usersService.remove(id);
  }
}
