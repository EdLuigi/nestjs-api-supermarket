export const findOneRoleTest = () => {
  // TEST: should find first role, no erros
  it('should find first role', findFirstRole);
};

const findFirstRole = async () => {
  const roles = await global.__CONTROLLER__.findAll();
  const firstRole = roles[0];

  const role = await global.__CONTROLLER__.findOne(firstRole.id);
  expect(!!role).toBe(true);
};
