import { AppModule } from '@/app.module';
import { Test, TestingModule } from '@nestjs/testing';
import { RolesPermissionsController } from '../controller/roles_permissions.controller';
import { RolesPermissionsService } from '../service/roles_permissions.service';
import { CreateRolePermissionUseCase } from '../use-case/create-role-permission.use-case';
import { FindAllRolesPermissionsUseCase } from '../use-case/find-all-roles-permissions.use-case';
import { FindOneRolePermissionUseCase } from '../use-case/find-role-permission.use-case';
import { RemoveRolePermissionUseCase } from '../use-case/remove-role-permission.use-case';
import { createRolePermissionTest } from './create.test';
import { findAllRolesPermissionsTest } from './find-all.test';
import { findOneRolePermissionTest } from './find-one.test';
import { removeRolePermissionTest } from './remove.test';

describe('RolesPermissionsController', () => {
  let controller: RolesPermissionsController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RolesPermissionsController],
      providers: [
        RolesPermissionsService,
        CreateRolePermissionUseCase,
        FindAllRolesPermissionsUseCase,
        FindOneRolePermissionUseCase,
        RemoveRolePermissionUseCase,
      ],
      imports: [AppModule],
    }).compile();

    controller = module.get<RolesPermissionsController>(
      RolesPermissionsController,
    );

    /* Define "global.__CONTROLLER__" as the current controller for testing*/
    global.__CONTROLLER__ = controller;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create()', () => createRolePermissionTest());
  describe('findAll()', () => findAllRolesPermissionsTest());
  describe('findOne()', () => findOneRolePermissionTest());
  describe('remove()', () => removeRolePermissionTest());
});
