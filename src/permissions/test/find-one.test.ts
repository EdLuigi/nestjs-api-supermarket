export const findOnePermissionTest = () => {
  // TEST: should find first permission, no erros
  it('should find first permission', findFirstPermission);
};

const findFirstPermission = async () => {
  const permissions = await global.__CONTROLLER__.findAll();
  const firstPermission = permissions[0];

  const permission = await global.__CONTROLLER__.findOne(firstPermission.id);
  expect(!!permission).toBe(true);
};
