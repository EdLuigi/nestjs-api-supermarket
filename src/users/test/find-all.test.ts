export const findAllUsersTest = () => {
  // TEST: should find all users, no erros
  it('should find all users', findAllUsers);
};

const findAllUsers = async () => {
  const users = await global.__CONTROLLER__.findAll();
  expect(!!users).toBe(true);
};
