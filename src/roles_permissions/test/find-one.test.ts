export const findOneRolePermissionTest = () => {
  // TEST: should find first role-permission, no erros
  it('should find first role-permission', findFirstRolePermission);
};

const findFirstRolePermission = async () => {
  const rolePermissions = await global.__CONTROLLER__.findAll();
  const firstRolePermission = rolePermissions[0];

  const rolePermission = await global.__CONTROLLER__.findOne(
    firstRolePermission.id,
  );
  expect(!!rolePermission).toBe(true);
};
