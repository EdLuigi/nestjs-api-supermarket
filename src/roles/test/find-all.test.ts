export const findAllRolesTest = () => {
  // TEST: should find all roles, no erros
  it('should find all roles', findAllRoles);
};

const findAllRoles = async () => {
  const roles = await global.__CONTROLLER__.findAll();
  expect(!!roles).toBe(true);
};
