import { NotFoundUserError } from '@/common/error/not-found-user.error';

export const findByUser = () => {
  // TEST: "id" should not exist, should throw "NotFoundUserError()"
  it('should validate business rules', validateBusinessRules);

  // TEST: should find first user userRole, no erros
  it('should find first user userRole', findFirstUserRole);
};

const validateBusinessRules = async () => {
  try {
    expect.assertions(1);
    const id = '99999';
    await global.__CONTROLLER__.findByUserId(+id);
  } catch (error) {
    expect(error).toStrictEqual(new NotFoundUserError());
  }
};

const findFirstUserRole = async () => {
  const id = '2';
  const firstUserRole = await global.__CONTROLLER__.findByUserId(+id);
  expect(firstUserRole.id === 2).toBe(true);
};
