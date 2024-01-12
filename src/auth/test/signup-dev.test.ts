import { CredentialsTakenError } from '@/common/error/credentials-taken.error';
import { SignupDto } from '../dto/signup.dto';
import { BadFormatRegistryError } from '@/common/error/bad-format-registry.error';

const authMock: SignupDto = {
  name: 'name-test-dev',
  email: 'email_test_dev@mail.com',
  registry: '694.118.648-80',
  password: 'password-test-dev',
};

export const SignupDevTest = () => {
  // TEST: "registry" should not be valid, should throw "BadFormatRegistryError()"
  //       "registry" should be taken, should throw "CredentialsTakenError()"
  //       "email" should be taken, should throw "CredentialsTakenError()"
  it('should validate business rules', validateBusinessRules);

  // TEST: should signup, no errors
  it('should signup', Signup);
};

const validateBusinessRules = async () => {
  expect.assertions(3);

  try {
    const registryWRONG: SignupDto = {
      ...authMock,
      registry: 'registryWrong',
    };
    await global.__CONTROLLER__.signupDev(registryWRONG);
  } catch (error) {
    expect(error).toStrictEqual(new BadFormatRegistryError());
  }

  try {
    const registryWRONG: SignupDto = {
      ...authMock,
      registry: '462.339.146-98',
    };
    await global.__CONTROLLER__.signupDev(registryWRONG);
  } catch (error) {
    expect(error).toStrictEqual(new CredentialsTakenError('registry'));
  }

  try {
    const emailWRONG: SignupDto = {
      ...authMock,
      email: 'user2@email.com',
    };
    await global.__CONTROLLER__.signupDev(emailWRONG);
  } catch (error) {
    expect(error).toStrictEqual(new CredentialsTakenError('email'));
  }
};

const Signup = async () => {
  const signupToken = await global.__CONTROLLER__.signupDev(authMock);
  expect(!!signupToken).toBe(true);
};
