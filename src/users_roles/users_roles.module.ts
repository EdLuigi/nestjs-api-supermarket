import { Module } from '@nestjs/common';
import { UsersRolesService } from './users_roles.service';
import { UsersRolesController } from './users_roles.controller';

@Module({
  controllers: [UsersRolesController],
  providers: [UsersRolesService]
})
export class UsersRolesModule {}
