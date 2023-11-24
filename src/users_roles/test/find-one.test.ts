export const findOneUserRoleTest = () => {
  // TEST: should find first userRole, no erros
  it('should find first user role', findFirstUserRole);
};

const findFirstUserRole = async () => {
  const usersRoles = await global.__CONTROLLER__.findAll();
  const firstUserRole = usersRoles[0];

  const userRole = await global.__CONTROLLER__.findOne(firstUserRole.id);
  expect(userRole.id === firstUserRole.id).toBe(true);
};
