import { RolesPermissionsService } from '@/roles_permissions/service/roles_permissions.service';
import { UsersRolesService } from '@/users_roles/service/users_roles.service';
import { Global, Module } from '@nestjs/common';
import { RolesController } from './controller/roles.controller';
import { RolesService } from './service/roles.service';
import { CreateRoleUseCase } from './use-case/create-role.use-case';
import { FindAllRolesUseCase } from './use-case/find-all-roles.use-case';
import { FindOneRoleUseCase } from './use-case/find-role.use-case';
import { RemoveRoleUseCase } from './use-case/remove-role.use-case';
import { UpdateRoleUseCase } from './use-case/update-role.use-case';

@Global()
@Module({
  controllers: [RolesController],
  providers: [
    RolesService,
    UsersRolesService,
    RolesPermissionsService,
    CreateRoleUseCase,
    FindAllRolesUseCase,
    FindOneRoleUseCase,
    UpdateRoleUseCase,
    RemoveRoleUseCase,
  ],
  exports: [RolesService],
})
export class RolesModule {}
