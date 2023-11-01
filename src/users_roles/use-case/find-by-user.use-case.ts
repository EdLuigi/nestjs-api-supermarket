import { BadFormatError } from '@/common/error/bad-format.error';
import { NotFoundUserError } from '@/common/error/not-found-user.error';
import { UsersService } from '@/users/service/users.service';
import { Injectable } from '@nestjs/common';
import { UsersRolesService } from '../service/users_roles.service';

@Injectable()
export class FindByUserIdUseCase {
  constructor(
    private usersRolesService: UsersRolesService,
    private usersService: UsersService,
  ) {}

  async execute(id: number) {
    if (isNaN(id)) throw new BadFormatError('id');

    const userExists = await this.usersService.findOne(id);
    if (!userExists) throw new NotFoundUserError();

    return await this.usersRolesService.findByUserId(userExists.id);
  }
}
