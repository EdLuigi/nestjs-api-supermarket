import { AppModule } from '@/app.module';
import { RolesController } from '@/roles/controller/roles.controller';
import { RolesService } from '@/roles/service/roles.service';
import { CreateRoleUseCase } from '@/roles/use-case/create-role.use-case';
import { FindAllRolesUseCase } from '@/roles/use-case/find-all-roles.use-case';
import { FindOneRoleUseCase } from '@/roles/use-case/find-role.use-case';
import { RemoveRoleUseCase } from '@/roles/use-case/remove-role.use-case';
import { UpdateRoleUseCase } from '@/roles/use-case/update-role.use-case';
import { RolesPermissionsService } from '@/roles_permissions/service/roles_permissions.service';
import { UsersRolesService } from '@/users_roles/service/users_roles.service';
import { Test, TestingModule } from '@nestjs/testing';
import { createRoleTest } from './create.test';
import { findAllRolesTest } from './find-all.test';
import { findOneRoleTest } from './find-one.test';
import { removeRoleTest } from './remove.test';
import { updateRoleTest } from './update.test';

describe('RolesController', () => {
  let controller: RolesController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RolesController],
      providers: [
        RolesService,
        UsersRolesService,
        RolesPermissionsService,
        CreateRoleUseCase,
        FindAllRolesUseCase,
        FindOneRoleUseCase,
        UpdateRoleUseCase,
        RemoveRoleUseCase,
      ],
      imports: [AppModule],
    }).compile();

    controller = module.get<RolesController>(RolesController);

    /* Define "global.__CONTROLLER__" as the current controller for testing*/
    global.__CONTROLLER__ = controller;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create()', () => createRoleTest());
  describe('findAll()', () => findAllRolesTest());
  describe('findOne()', () => findOneRoleTest());
  describe('update()', () => updateRoleTest());
  describe('remove()', () => removeRoleTest());
});
