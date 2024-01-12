import { IncorrectCredentialsError } from '@/common/error/incorrect-credentials.error';
import { UnverifiedUserError } from '@/common/error/unverified-user.error';
import { SigninDto } from '../dto/signin.dto';

const authMock: SigninDto = {
  email: 'user2@email.com',
  password: '123',
};

export const SigninTest = () => {
  // TEST: "email" should not exist, should throw "IncorrectCredentialsError()"
  //       User email should not be verified, should throw "UnverifiedUserError()"
  //       "password" should not match, should throw "IncorrectCredentialsError()"
  it('should validate business rules', validateBusinessRules);

  // TEST: should signin, no errors
  it('should signin', Signin);
};

const validateBusinessRules = async () => {
  expect.assertions(3);

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
    const emailUnverified: SigninDto = {
      email: 'email_test@mail.com',
      password: 'password-test',
    };
    await global.__CONTROLLER__.signin(emailUnverified);
  } catch (error) {
    expect(error).toStrictEqual(new UnverifiedUserError());
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
