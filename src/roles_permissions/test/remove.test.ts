import { NotFoundRolePermissionError } from '@/common/error/not-found-role-permission.error';

export const removeRolePermissionTest = () => {
  // TEST: "id" should not exist, should throw "NotFoundRolePermissionError()"
  it('should validate business rules', validateBusinessRules);

  // TEST: should remove last role-permission, no erros
  it('should remove last role-permission', removeLastRolePermission);
};

const validateBusinessRules = async () => {
  try {
    expect.assertions(1);
    const id = '99999';
    await global.__CONTROLLER__.remove(+id);
  } catch (error) {
    expect(error).toStrictEqual(new NotFoundRolePermissionError());
  }
};

const removeLastRolePermission = async () => {
  const rolePermissions = await global.__CONTROLLER__.findAll();
  const lastRolePermission = rolePermissions[rolePermissions.length - 1];

  await global.__CONTROLLER__.remove(lastRolePermission.id);
};
