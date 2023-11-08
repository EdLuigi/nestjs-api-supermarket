import { NotFoundSupplierError } from '@/common/error/not-found-supplier.error';
import { CreateProductDto } from '@/products/dto/create-product.dto';
import { CreateSupplierDto } from '@/suppliers/dto/create-supplier.dto';
import { CreatePermissionDto } from '../dto/create-permission.dto';
import { DuplicateKeyValueError } from '@/common/error/duplicate-key-value.error';

export const createPermissionTest = () => {
  // TEST: "name" duplicate, should throw "DuplicateKeyValueError()"
  it('should validate fields', validateFields);

  // TEST: should create permission, no errors
  it('should create permission', createPermission);
};

const validateFields = async () => {
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
