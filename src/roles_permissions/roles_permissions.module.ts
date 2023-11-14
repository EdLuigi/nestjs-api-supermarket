import { Module } from '@nestjs/common';
import { RolesPermissionsController } from './controller/roles_permissions.controller';
import { RolesPermissionsService } from './service/roles_permissions.service';
import { CreateRolePermissionUseCase } from './use-case/create-role-permission.use-case';
import { FindAllRolesPermissionsUseCase } from './use-case/find-all-roles-permissions.use-case';
import { FindOneRolePermissionUseCase } from './use-case/find-role-permission.use-case';
import { RemoveRolePermissionUseCase } from './use-case/remove-role-permission.use-case';

@Module({
  controllers: [RolesPermissionsController],
  providers: [
    RolesPermissionsService,
    CreateRolePermissionUseCase,
    FindAllRolesPermissionsUseCase,
    FindOneRolePermissionUseCase,
    RemoveRolePermissionUseCase,
  ],
})
export class RolesPermissionsModule {}
