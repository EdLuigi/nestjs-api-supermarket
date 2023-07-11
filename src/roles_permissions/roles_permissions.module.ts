import { Module } from '@nestjs/common';
import { RolesPermissionsService } from './service/roles_permissions.service';
import { RolesPermissionsController } from './controller/roles_permissions.controller';

@Module({
  controllers: [RolesPermissionsController],
  providers: [RolesPermissionsService]
})
export class RolesPermissionsModule {}
