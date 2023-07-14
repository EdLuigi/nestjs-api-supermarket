import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UsersService } from '../service/users.service';
import { UserIsAdminGuard } from 'src/auth/guard/user-is-admin.guard';
import { UserIsManagerGuard } from 'src/auth/guard/user-is-manager.guard';

@UseGuards(JwtGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  getMe(@GetUser('id') userId: number) {
    return this.usersService.findOne(+userId);
  }

  @UseGuards(UserIsManagerGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(UserIsManagerGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch()
  update(@GetUser('id') userId: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+userId, updateUserDto);
  }

  @UseGuards(UserIsAdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
