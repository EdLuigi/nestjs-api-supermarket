import { RoutePermission } from '@/common/decorator/route-permission.decorator';
import { JwtGuard } from '@/common/guard/jwt.guard';
import { UserHasPermissionGuard } from '@/common/guard/route-permission.guard';
import { IdFormatValidationPipe } from '@/common/pipe/id-format-validation.pipe';
import { Body, Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UpdateUsersRoleDto } from '../dto/update-users_role.dto';
import { FindAllUsersRolesUseCase } from '../use-case/find-all-users-roles.use-case';
import { FindByUserIdUseCase } from '../use-case/find-by-user.use-case';
import { FindUserRoleUseCase } from '../use-case/find-user-role.use-case';
import { UpdateUserRoleUseCase } from '../use-case/update-user-role.use-case';

@ApiTags('User-Roles')
@ApiBearerAuth('JWT-auth')
@UseGuards(JwtGuard, UserHasPermissionGuard)
@Controller('users-roles')
export class UsersRolesController {
  constructor(
    private readonly findAllUsersRolesUseCase: FindAllUsersRolesUseCase,
    private readonly findUserRoleUseCase: FindUserRoleUseCase,
    private readonly findByUserIdUseCase: FindByUserIdUseCase,
    private readonly updateUserRoleUseCase: UpdateUserRoleUseCase,
  ) {}

  @Get()
  @RoutePermission('find-all-users-roles')
  findAll() {
    return this.findAllUsersRolesUseCase.execute();
  }

  @Get(':id')
  @RoutePermission('find-user-role')
  findOne(@Param('id', IdFormatValidationPipe) id: number) {
    return this.findUserRoleUseCase.execute(id);
  }

  @Get('/user/:id')
  @RoutePermission('find-user-role-by-user-id')
  findByUserId(@Param('id', IdFormatValidationPipe) id: number) {
    return this.findByUserIdUseCase.execute(id);
  }

  @Patch('/user/:userId')
  @RoutePermission('update-user-role')
  update(
    @Param('userId', IdFormatValidationPipe) userId: number,
    @Body() updateUsersRoleDto: UpdateUsersRoleDto,
  ) {
    return this.updateUserRoleUseCase.execute(userId, updateUsersRoleDto);
  }
}
