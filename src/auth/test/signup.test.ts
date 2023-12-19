import { CredentialsTakenError } from '@/common/error/credentials-taken.error';
import { SignupDto } from '../dto/signup.dto';
import { BadFormatRegistryError } from '@/common/error/bad-format-registry.error';

const authMock: SignupDto = {
  name: 'name-test',
  email: 'email-test',
  registry: '827.224.678-36',
  password: 'password-test',
};

export const SignupTest = () => {
  // TEST: "registry" should not be valid, should throw "BadFormatRegistryError()"
  //       "registry" should be taken, should throw "CredentialsTakenError()"
  it('should validate business rules', validateBusinessRules);

  // TEST: should signup, no errors
  it('should signup', Signup);
};

const validateBusinessRules = async () => {
  expect.assertions(2);

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
    expect(error).toStrictEqual(new CredentialsTakenError());
  }
};

const Signup = async () => {
  const signupToken = await global.__CONTROLLER__.signup(authMock);
  expect(!!signupToken).toBe(true);
};
