import { AppModule } from '@/app.module';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersRolesController } from '../controller/users_roles.controller';
import { UsersRolesService } from '../service/users_roles.service';
import { FindAllUsersRolesUseCase } from '../use-case/find-all-users-roles.use-case';
import { FindByUserIdUseCase } from '../use-case/find-by-user.use-case';
import { FindUserRoleUseCase } from '../use-case/find-user-role.use-case';
import { UpdateUserRoleUseCase } from '../use-case/update-user-role.use-case';
import { findAllUsersRolesTest } from './find-all.test';
import { findByUser } from './find-by-user.test';
import { findOneUserRoleTest } from './find-one.test';
import { updateUserRoleTest } from './update.test';

describe('UsersRolesController', () => {
  let controller: UsersRolesController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersRolesController],
      providers: [
        UsersRolesService,
        FindAllUsersRolesUseCase,
        FindUserRoleUseCase,
        FindByUserIdUseCase,
        UpdateUserRoleUseCase,
      ],
      imports: [AppModule],
    }).compile();

    controller = module.get<UsersRolesController>(UsersRolesController);

    /* Define "global.__CONTROLLER__" as the current controller for testing*/
    global.__CONTROLLER__ = controller;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll()', () => findAllUsersRolesTest());
  describe('findOne()', () => findOneUserRoleTest());
  describe('findByUserId()', () => findByUser());
  describe('update()', () => updateUserRoleTest());
});
