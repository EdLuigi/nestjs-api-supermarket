export const findAllRolesPermissionsTest = () => {
  // TEST: should find all roles-permissions, no erros
  it('should find all roles-permissions', findAllRolesPermissions);
};

const findAllRolesPermissions = async () => {
  const rolesPermissions = await global.__CONTROLLER__.findAll();
  expect(!!rolesPermissions).toBe(true);
};
