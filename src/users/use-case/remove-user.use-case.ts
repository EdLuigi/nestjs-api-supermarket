import { BadFormatError } from '@/common/error/bad-format.error';
import { NotFoundUserError } from '@/common/error/not-found-user.error';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../service/users.service';

@Injectable()
export class RemoveUserUseCase {
  constructor(private usersService: UsersService) {}

  async execute(id: number) {
    if (isNaN(id)) throw new BadFormatError('id');

    const userExists = await this.usersService.findOne(id);
    if (!userExists) throw new NotFoundUserError();

    return await this.usersService.remove(id);
  }
}
