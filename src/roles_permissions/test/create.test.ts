import { DuplicateKeyValueError } from '@/common/error/duplicate-key-value.error';
import { NotFoundPermissionError } from '@/common/error/not-found-permission.error';
import { NotFoundRoleError } from '@/common/error/not-found-role.error';
import { CreateRolePermissionDto } from '../dto/create-role_permission.dto';

export const createRolePermissionTest = () => {
  // TEST: "role" should not exist, should throw "NotFoundRoleError()"
  //       "permission" should not exist, should throw "NotFoundPermissionError()"
  //       "roleId, permissionId" duplicate, should throw "DuplicateKeyValueError()"
  it('should validate business rules', validateBusinessRules);

  // TEST: should create role-permission, no errors
  it('should create role-permission', createRolePermission);
};

const validateBusinessRules = async () => {
  expect.assertions(3);

  try {
    const rolePermissionMock: CreateRolePermissionDto = {
      roleId: 9999,
      permissionId: 1,
    };

    await global.__CONTROLLER__.create(rolePermissionMock);
  } catch (error) {
    expect(error).toStrictEqual(new NotFoundRoleError());
  }

  try {
    const rolePermissionMock: CreateRolePermissionDto = {
      roleId: 1,
      permissionId: 9999,
    };

    await global.__CONTROLLER__.create(rolePermissionMock);
  } catch (error) {
    expect(error).toStrictEqual(new NotFoundPermissionError());
  }

  try {
    const rolePermissionMock: CreateRolePermissionDto = {
      roleId: 1,
      permissionId: 1,
    };

    await global.__CONTROLLER__.create(rolePermissionMock);
  } catch (error) {
    expect(error).toStrictEqual(
      new DuplicateKeyValueError('roleId, permissionId'),
    );
  }
};

const createRolePermission = async () => {
  const rolePermissionMock: CreateRolePermissionDto = {
    roleId: 3,
    permissionId: 1,
  };

  const newRolePermission = await global.__CONTROLLER__.create(
    rolePermissionMock,
  );
  expect(!!newRolePermission).toBe(true);
};
