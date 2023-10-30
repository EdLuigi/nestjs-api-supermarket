import { BadFormatError } from '@/common/error/bad-format.error';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../service/users.service';

@Injectable()
export class FindUserUseCase {
  constructor(private usersService: UsersService) {}

  async execute(id: number) {
    if (isNaN(id)) throw new BadFormatError('id');

    return await this.usersService.findOne(id);
  }
}
