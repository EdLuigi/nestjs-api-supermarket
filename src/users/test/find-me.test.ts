import { BadFormatError } from '@/common/error/bad-format.error';

export const findMeTest = () => {
  // TEST: "id" in wrong format, should throw "BadFormatError()"
  it('should validate fields', validateFields);

  // TEST: should find me (first user), no erros
  it('should find me (first user)', findMe);
};

const validateFields = async () => {
  try {
    expect.assertions(1);

    const id_WRONG = 'a';
    await global.__CONTROLLER__.findMe(id_WRONG);
  } catch (error) {
    expect(error).toStrictEqual(new BadFormatError('id'));
  }
};

const findMe = async () => {
  const users = await global.__CONTROLLER__.findAll();
  const firstUser = users[0];

  const user = await global.__CONTROLLER__.findMe(firstUser.id);
  expect(!!user).toBe(true);
};
