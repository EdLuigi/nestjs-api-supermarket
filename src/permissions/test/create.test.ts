import { DuplicateKeyValueError } from '@/common/error/duplicate-key-value.error';
import { CreatePermissionDto } from '../dto/create-permission.dto';

export const createPermissionTest = () => {
  // TEST: "name" duplicate, should throw "DuplicateKeyValueError()"
  it('should validate business rules', validateBusinessRules);

  // TEST: should create permission, no errors
  it('should create permission', createPermission);
};

const validateBusinessRules = async () => {
  try {
    expect.assertions(1);
    const allPermissions = await global.__CONTROLLER__.findAll();

    const permissionMock: CreatePermissionDto = {
      name: allPermissions[0].name,
      description: null,
    };

    await global.__CONTROLLER__.create(permissionMock);
  } catch (error) {
    expect(error).toStrictEqual(new DuplicateKeyValueError('name'));
  }
};

const createPermission = async () => {
  const permissionMock: CreatePermissionDto = {
    name: 'name test',
    description: null,
  };

  const newPermission = await global.__CONTROLLER__.create(permissionMock);
  expect(!!newPermission).toBe(true);
};
