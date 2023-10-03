import { Body, Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { RoutePermission } from 'src/auth/decorator/route-permission.decorator';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { UserHasPermissionGuard } from 'src/auth/guard/route-permission.guard';
import { UpdateUsersRoleDto } from '../dto/update-users_role.dto';
import { UsersRolesService } from '../service/users_roles.service';

@UseGuards(JwtGuard, UserHasPermissionGuard)
@Controller('users-roles')
export class UsersRolesController {
  constructor(private readonly usersRolesService: UsersRolesService) {}

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

  @Get('/user/:id')
  @RoutePermission('find-user-role-by-user-id')
  findByUserId(@Param('id') id: string) {
    return this.usersRolesService.findByUserId(+id);
  }

  @Patch('/user/:userId')
  @RoutePermission('update-user-role')
  update(
    @Param('userId') userId: string,
    @Body() updateUsersRoleDto: UpdateUsersRoleDto,
  ) {
    return this.usersRolesService.update(+userId, updateUsersRoleDto);
  }
}
