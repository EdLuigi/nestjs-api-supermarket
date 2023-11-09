import { BadFormatError } from '@/common/error/bad-format.error';
import { NotFoundUserError } from '@/common/error/not-found-user.error';

export const removeUserTest = () => {
  // TEST: "id" in wrong format, should throw "BadFormatError()"
  it('should validate fields', validateFields);

  // TEST: "id" should not exist, should throw "NotFoundUserError()"
  it('should validate business rules', validateBusinessRules);

  // TEST: should remove first user, no erros
  it('should remove first user', removeFirstUser);
};

const validateFields = async () => {
  try {
    expect.assertions(1);

    const id_WRONG = 'a';
    await global.__CONTROLLER__.remove(id_WRONG);
  } catch (error) {
    expect(error).toStrictEqual(new BadFormatError('id'));
  }
};

const validateBusinessRules = async () => {
  try {
    expect.assertions(1);
    const id = '99999';
    await global.__CONTROLLER__.remove(id);
  } catch (error) {
    expect(error).toStrictEqual(new NotFoundUserError());
  }
};

const removeFirstUser = async () => {
  const users = await global.__CONTROLLER__.findAll();
  const firstUser = users[0];

  await global.__CONTROLLER__.remove(firstUser.id);
};
