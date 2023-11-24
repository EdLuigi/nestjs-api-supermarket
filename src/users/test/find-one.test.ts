export const findOneUserTest = () => {
  // TEST: should find first user, no erros
  it('should find first user', findFirstUser);
};

const findFirstUser = async () => {
  const users = await global.__CONTROLLER__.findAll();
  const firstUser = users[0];

  const user = await global.__CONTROLLER__.findOne(firstUser.id);
  expect(user.id === firstUser.id).toBe(true);
};
