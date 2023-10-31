import { CredentialsTakenError } from '@/common/error/credentials-taken.error';
import { SigninDto } from '../dto/signin.dto';
import { IncorrectCredentialsError } from '@/common/error/incorrect-credentials.error';

const authMock: SigninDto = {
  registry: 'user1',
  password: '123',
};

export const SigninTest = () => {
  // TEST: "registry" should not exist, should throw "IncorrectCredentialsError()"
  //       password should not match, should throw "IncorrectCredentialsError()"
  it('should validate business rules', validateBusinessRules);

  // TEST: should signin, no errors
  it('should signin', Signin);
};

const validateBusinessRules = async () => {
  expect.assertions(2);

  try {
    const registryWRONG: SigninDto = {
      ...authMock,
      registry: 'user',
    };
    await global.__CONTROLLER__.signin(registryWRONG);
  } catch (error) {
    expect(error).toStrictEqual(new IncorrectCredentialsError());
  }

  try {
    const registryWRONG: SigninDto = {
      ...authMock,
      password: 'password',
    };
    await global.__CONTROLLER__.signin(registryWRONG);
  } catch (error) {
    expect(error).toStrictEqual(new IncorrectCredentialsError());
  }
};

const Signin = async () => {
  const signinToken = await global.__CONTROLLER__.signin(authMock);
  expect(!!signinToken).toBe(true);
};
