import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { User } from '@prisma/client';

@UseGuards(JwtGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Must have permission
  @Get()
  findAll(@GetUser('id') userId: number) {
    return this.usersService.findAll();
  }

  @Get('me')
  getMe(@GetUser('id') userId: number) {
    return this.usersService.findOne(+userId);
  }

  // Must have permission
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch()
  update(@GetUser('id') userId: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+userId, updateUserDto);
  }

  // Must have permission
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
