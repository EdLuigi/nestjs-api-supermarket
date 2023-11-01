export const findAllUsersRolesTest = () => {
  // TEST: should find all usersRoles, no erros
  it('should find all users roles', findAllUsersRoles);
};

const findAllUsersRoles = async () => {
  const usersRoles = await global.__CONTROLLER__.findAll();
  expect(!!usersRoles).toBe(true);
};
