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
import { UserHasPermissionGuard } from 'src/auth/guard/route-permission.guard';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UsersService } from '../service/users.service';
import { GetMeUseCase } from './get-me.controller';

@UseGuards(JwtGuard, UserHasPermissionGuard)
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly getMeController: GetMeUseCase,
  ) {}

  @Get('me')
  @RoutePermission('find-me')
  getMe(@GetUser('id') userId: number) {
    console.log(`get me`);
    return this.getMeController.main(userId);
  }

  @Get()
  @RoutePermission('find-all-users')
  findAll() {
    console.log(`find all`);
    // console.log(this.usersService);
    return this.usersService.findAll();
  }

  @Get(':id')
  @RoutePermission('find-user')
  findOne(@Param('id') id: string) {
    console.log(`find one`);
    return this.usersService.findOne(+id);
  }

  @Patch()
  @RoutePermission('update-me')
  updateMe(
    @GetUser('id') userId: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    console.log(`update me`);
    return this.usersService.update(+userId, updateUserDto);
  }

  @Patch(':id')
  @RoutePermission('update-user')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    console.log(`update`);
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @RoutePermission('delete-user')
  remove(@Param('id') id: string) {
    console.log(`remove`);
    return this.usersService.remove(+id);
  }
}
