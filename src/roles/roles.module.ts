import { Global, Module } from '@nestjs/common';
import { RolesService } from './service/roles.service';
import { RolesController } from './controller/roles.controller';

@Global()
@Module({
  controllers: [RolesController],
  providers: [RolesService],
  exports: [RolesService],
})
export class RolesModule {}
