import { NotFoundUserError } from '@/common/error/not-found-user.error';
import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UsersService } from '../service/users.service';

@Injectable()
export class UpdateUserUseCase {
  constructor(private usersService: UsersService) {}

  async execute(id: number, updateUserData: UpdateUserDto) {
    const userExists = await this.usersService.findOne(id);
    if (!userExists) throw new NotFoundUserError();

    return await this.usersService.update(id, updateUserData);
  }
}
