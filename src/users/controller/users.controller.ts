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
import { RoutePermission } from 'src/auth/decorator/route-permission.decorator';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { UserHasPermissionGuard } from 'src/auth/guard/route-permission/route-permission.guard';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UsersService } from '../service/users.service';

@UseGuards(JwtGuard, UserHasPermissionGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  @RoutePermission('find-me')
  getMe(@GetUser('id') userId: number) {
    return this.usersService.findMe(+userId);
  }

  @Get()
  @RoutePermission('find-all-users')
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @RoutePermission('find-user')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch()
  @RoutePermission('update-me')
  updateMe(@GetUser('id') userId: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+userId, updateUserDto);
  }
  
  @Patch(":id")
  @RoutePermission('update-user')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @RoutePermission('delete-user')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
