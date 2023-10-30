import { AppModule } from '@/app.module';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../controller/users.controller';
import { UsersService } from '../service/users.service';
import { FindAllUsersUseCase } from '../use-case/find-all-users.use-case';
import { FindMeUseCase } from '../use-case/find-me.use-case';
import { FindUserUseCase } from '../use-case/find-user.use-case';
import { RemoveUserUseCase } from '../use-case/remove-user.use-case';
import { UpdateUserUseCase } from '../use-case/update-user.use-case';
import { findAllUsersTest } from './find-all.test';
import { findMeTest } from './find-me.test';
import { findOneUserTest } from './find-one.test';
import { removeUserTest } from './remove.test';
import { updateUserTest } from './update.test';

describe('UsersController', () => {
  let controller: UsersController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        FindMeUseCase,
        FindAllUsersUseCase,
        FindUserUseCase,
        UpdateUserUseCase,
        RemoveUserUseCase,
      ],
      imports: [AppModule],
    }).compile();

    controller = module.get<UsersController>(UsersController);

    /* Define "global.__CONTROLLER__" as the current controller for testing*/
    global.__CONTROLLER__ = controller;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll()', () => findAllUsersTest());
  describe('findMe()', () => findMeTest());
  describe('findOne()', () => findOneUserTest());
  describe('update()', () => updateUserTest());
  describe('remove()', () => removeUserTest());
});
