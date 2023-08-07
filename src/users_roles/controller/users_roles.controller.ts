import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { RoutePermission } from 'src/auth/decorator/route-permission.decorator';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { UserHasPermissionGuard } from 'src/auth/guard/route-permission/route-permission.guard';
import { CreateUsersRoleDto } from '../dto/create-users_role.dto';
import { UsersRolesService } from '../service/users_roles.service';

@UseGuards(JwtGuard, UserHasPermissionGuard)
@Controller('users-roles')
export class UsersRolesController {
  constructor(private readonly usersRolesService: UsersRolesService) {}

  @Post()
  @RoutePermission('create-user-role')
  create(@Body() createUsersRoleDto: CreateUsersRoleDto) {
    return this.usersRolesService.create(createUsersRoleDto);
  }

  @Get()
  @RoutePermission('find-all-users-roles')
  findAll() {
    return this.usersRolesService.findAll();
  }

  @Get(':id')
  @RoutePermission('find-user-role')
  findOne(@Param('id') id: string) {
    return this.usersRolesService.findOne(+id);
  }

  @Delete(':id')
  @RoutePermission('delete-user-role')
  remove(@Param('id') id: string) {
    return this.usersRolesService.remove(+id);
  }
}
