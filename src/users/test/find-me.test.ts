export const findMeTest = () => {
  // TEST: should find me (first user), no erros
  it('should find me (first user)', findMe);
};

const findMe = async () => {
  const users = await global.__CONTROLLER__.findAll();
  const firstUser = users[0];

  const user = await global.__CONTROLLER__.findMe(firstUser.id);
  expect(!!user).toBe(true);
};
