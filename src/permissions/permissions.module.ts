import { RolesPermissionsService } from '@/roles_permissions/service/roles_permissions.service';
import { Global, Module } from '@nestjs/common';
import { PermissionsController } from './controller/permissions.controller';
import { PermissionsService } from './service/permissions.service';
import { CreatePermissionUseCase } from './use-case/create-permission.use-case';
import { FindAllPermissionsUseCase } from './use-case/find-all-permissions.use-case';
import { FindOnePermissionUseCase } from './use-case/find-one-permission.use-case';
import { RemovePermissionUseCase } from './use-case/remove-permission.use-case';
import { UpdatePermissionUseCase } from './use-case/update-permission.use-case';

@Global()
@Module({
  controllers: [PermissionsController],
  providers: [
    PermissionsService,
    RolesPermissionsService,
    CreatePermissionUseCase,
    FindAllPermissionsUseCase,
    FindOnePermissionUseCase,
    UpdatePermissionUseCase,
    RemovePermissionUseCase,
  ],
  exports: [PermissionsService],
})
export class PermissionsModule {}
