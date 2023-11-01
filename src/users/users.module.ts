import { UsersRolesService } from '@/users_roles/service/users_roles.service';
import { Global, Module } from '@nestjs/common';
import { UsersController } from './controller/users.controller';
import { UsersService } from './service/users.service';
import { FindAllUsersUseCase } from './use-case/find-all-users.use-case';
import { FindMeUseCase } from './use-case/find-me.use-case';
import { FindUserUseCase } from './use-case/find-user.use-case';
import { RemoveUserUseCase } from './use-case/remove-user.use-case';
import { UpdateUserUseCase } from './use-case/update-user.use-case';

@Global()
@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    UsersRolesService,
    FindMeUseCase,
    FindAllUsersUseCase,
    FindUserUseCase,
    UpdateUserUseCase,
    RemoveUserUseCase,
  ],
  exports: [UsersService],
})
export class UsersModule {}
