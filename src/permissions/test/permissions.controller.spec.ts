import { AppModule } from '@/app.module';
import { RolesPermissionsService } from '@/roles_permissions/service/roles_permissions.service';
import { Test, TestingModule } from '@nestjs/testing';
import { PermissionsController } from '../controller/permissions.controller';
import { PermissionsService } from '../service/permissions.service';
import { CreatePermissionUseCase } from '../use-case/create-permission.use-case';
import { FindAllPermissionsUseCase } from '../use-case/find-all-permissions.use-case';
import { FindOnePermissionUseCase } from '../use-case/find-one-permission.use-case';
import { RemovePermissionUseCase } from '../use-case/remove-permission.use-case';
import { UpdatePermissionUseCase } from '../use-case/update-permission.use-case';
import { createPermissionTest } from './create.test';
import { findAllPermissionsTest } from './find-all.test';
import { findOnePermissionTest } from './find-one.test';
import { removePermissionTest } from './remove.test';
import { updatePermissionTest } from './update.test';

describe('PermissionsController', () => {
  let controller: PermissionsController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PermissionsController],
      providers: [
        PermissionsService,
        RolesPermissionsService,
        CreatePermissionUseCase,
        FindAllPermissionsUseCase,
        FindOnePermissionUseCase,
        UpdatePermissionUseCase,
        RemovePermissionUseCase,
      ],
      imports: [AppModule],
    }).compile();

    controller = module.get<PermissionsController>(PermissionsController);

    /* Define "global.__CONTROLLER__" as the current controller for testing*/
    global.__CONTROLLER__ = controller;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create()', () => createPermissionTest());
  describe('findAll()', () => findAllPermissionsTest());
  describe('findOne()', () => findOnePermissionTest());
  describe('update()', () => updatePermissionTest());
  describe('remove()', () => removePermissionTest());
});
