import { Injectable } from '@nestjs/common';
import { UsersService } from '../service/users.service';

@Injectable()
export class FindAllUsersUseCase {
  constructor(private usersService: UsersService) {}

  async execute() {
    return await this.usersService.findAll();
  }
}
