import { Injectable } from '@nestjs/common';
import { UsersService } from '../service/users.service';

@Injectable()
export class FindUserUseCase {
  constructor(private usersService: UsersService) {}

  async execute(id: number) {
    return await this.usersService.findOne(id);
  }
}
