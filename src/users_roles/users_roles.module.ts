import { Module } from '@nestjs/common';
import { UsersRolesController } from './controller/users_roles.controller';
import { UsersRolesService } from './service/users_roles.service';
import { FindAllUsersRolesUseCase } from './use-case/find-all-users-roles.use-case';
import { FindByUserIdUseCase } from './use-case/find-by-user.use-case';
import { FindUserRoleUseCase } from './use-case/find-user-role.use-case';
import { UpdateUserRoleUseCase } from './use-case/update-user-role.use-case';

@Module({
  controllers: [UsersRolesController],
  providers: [
    UsersRolesService,
    FindAllUsersRolesUseCase,
    FindUserRoleUseCase,
    FindByUserIdUseCase,
    UpdateUserRoleUseCase,
  ],
})
export class UsersRolesModule {}
