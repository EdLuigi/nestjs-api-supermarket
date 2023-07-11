import { Global, Module } from '@nestjs/common';
import { PermissionsService } from './service/permissions.service';
import { PermissionsController } from './controller/permissions.controller';

@Global()
@Module({
  controllers: [PermissionsController],
  providers: [PermissionsService],
  exports: [PermissionsService],
})
export class PermissionsModule {}
