import { BadFormatRegistryError } from '@/common/error/bad-format-registry.error';
import { IncorrectCredentialsError } from '@/common/error/incorrect-credentials.error';
import { SigninDto } from '../dto/signin.dto';

const authMock: SigninDto = {
  email: 'user2@email.com',
  password: '123',
};

export const SigninTest = () => {
  // TEST: "email" should not exist, should throw "IncorrectCredentialsError()"
  //       "password" should not match, should throw "IncorrectCredentialsError()"
  it('should validate business rules', validateBusinessRules);

  // TEST: should signin, no errors
  it('should signin', Signin);
};

const validateBusinessRules = async () => {
  expect.assertions(2);

  try {
    const emailWRONG: SigninDto = {
      ...authMock,
      email: 'wrongEmail@mail.com',
    };
    await global.__CONTROLLER__.signin(emailWRONG);
  } catch (error) {
    expect(error).toStrictEqual(new IncorrectCredentialsError());
  }

  try {
    const credentialsWrong: SigninDto = {
      ...authMock,
      password: 'password',
    };
    await global.__CONTROLLER__.signin(credentialsWrong);
  } catch (error) {
    expect(error).toStrictEqual(new IncorrectCredentialsError());
  }
};

const Signin = async () => {
  const signinToken = await global.__CONTROLLER__.signin(authMock);
  expect(!!signinToken).toBe(true);
};
