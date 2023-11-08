export const findAllPermissionsTest = () => {
  // TEST: should find all permissions, no erros
  it('should find all permissions', findAllPermissions);
};

const findAllPermissions = async () => {
  const permissions = await global.__CONTROLLER__.findAll();
  expect(!!permissions).toBe(true);
};
