import { BadFormatRegistryError } from '@/common/error/bad-format-registry.error';
import { CredentialsTakenError } from '@/common/error/credentials-taken.error';
import { SignupDto } from '../dto/signup.dto';

const authMock: SignupDto = {
  name: 'name-test',
  email: 'email_test@email.com',
  registry: '827.224.678-36',
  password: 'password-test',
};

export const SignupTest = () => {
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
    await global.__CONTROLLER__.signup(registryWRONG);
  } catch (error) {
    expect(error).toStrictEqual(new BadFormatRegistryError());
  }

  try {
    const registryWRONG: SignupDto = {
      ...authMock,
      registry: '462.339.146-98',
    };
    await global.__CONTROLLER__.signup(registryWRONG);
  } catch (error) {
    expect(error).toStrictEqual(new CredentialsTakenError('registry'));
  }

  try {
    const emailWRONG: SignupDto = {
      ...authMock,
      email: 'user2@email.com',
    };
    await global.__CONTROLLER__.signup(emailWRONG);
  } catch (error) {
    expect(error).toStrictEqual(new CredentialsTakenError('email'));
  }
};

const Signup = async () => {
  await global.__CONTROLLER__.signup(authMock);
};
