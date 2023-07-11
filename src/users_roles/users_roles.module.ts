import { Module } from '@nestjs/common';
import { UsersRolesService } from './service/users_roles.service';
import { UsersRolesController } from './controller/users_roles.controller';

@Module({
  controllers: [UsersRolesController],
  providers: [UsersRolesService]
})
export class UsersRolesModule {}
