import { BadFormatError } from '@/common/error/bad-format.error';

export const findOneRolePermissionTest = () => {
  // TEST: "id" in wrong format, should throw "BadFormatError()"
  it('should validate fields', validateFields);

  // TEST: should find first role-permission, no erros
  it('should find first role-permission', findFirstRolePermission);
};

const validateFields = async () => {
  try {
    expect.assertions(1);

    const id_WRONG = 'a';
    await global.__CONTROLLER__.findOne(id_WRONG);
  } catch (error) {
    expect(error).toStrictEqual(new BadFormatError('id'));
  }
};

const findFirstRolePermission = async () => {
  const rolePermissions = await global.__CONTROLLER__.findAll();
  const firstRolePermission = rolePermissions[0];

  const rolePermission = await global.__CONTROLLER__.findOne(
    firstRolePermission.id,
  );
  expect(!!rolePermission).toBe(true);
};
