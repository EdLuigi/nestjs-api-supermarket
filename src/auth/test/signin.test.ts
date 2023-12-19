import { BadFormatRegistryError } from '@/common/error/bad-format-registry.error';
import { IncorrectCredentialsError } from '@/common/error/incorrect-credentials.error';
import { SigninDto } from '../dto/signin.dto';

const authMock: SigninDto = {
  registry: '462.339.146-98',
  password: '123',
};

export const SigninTest = () => {
  // TEST: "registry" should not be valid, should throw "BadFormatRegistryError()"
  //       "registry" should not exist, should throw "IncorrectCredentialsError()"
  //       "password" should not match, should throw "IncorrectCredentialsError()"
  it('should validate business rules', validateBusinessRules);

  // TEST: should signin, no errors
  it('should signin', Signin);
};

const validateBusinessRules = async () => {
  expect.assertions(3);

  try {
    const registryWRONG: SigninDto = {
      ...authMock,
      registry: 'registryWrong',
    };
    await global.__CONTROLLER__.signin(registryWRONG);
  } catch (error) {
    expect(error).toStrictEqual(new BadFormatRegistryError());
  }

  try {
    const registryWRONG: SigninDto = {
      ...authMock,
      registry: '851.331.742-09',
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
