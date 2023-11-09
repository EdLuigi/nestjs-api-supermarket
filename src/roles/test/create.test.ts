import { DuplicateKeyValueError } from '@/common/error/duplicate-key-value.error';
import { CreateRoleDto } from '../dto/create-role.dto';

export const createRoleTest = () => {
  // TEST: "name" duplicate, should throw "DuplicateKeyValueError()"
  it('should validate fields', validateFields);

  // TEST: should create role, no errors
  it('should create role', createRole);
};

const validateFields = async () => {
  try {
    expect.assertions(1);
    const allRoles = await global.__CONTROLLER__.findAll();

    const roleMock: CreateRoleDto = {
      name: allRoles[0].name,
      description: null,
    };

    await global.__CONTROLLER__.create(roleMock);
  } catch (error) {
    expect(error).toStrictEqual(new DuplicateKeyValueError('name'));
  }
};

const createRole = async () => {
  const roleMock: CreateRoleDto = {
    name: 'name test',
    description: null,
  };

  const newRole = await global.__CONTROLLER__.create(roleMock);
  expect(!!newRole).toBe(true);
};
