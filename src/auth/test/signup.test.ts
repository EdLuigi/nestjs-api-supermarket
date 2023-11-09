import { CredentialsTakenError } from '@/common/error/credentials-taken.error';
import { SignupDto } from '../dto/signup.dto';

const authMock: SignupDto = {
  name: 'name-test',
  email: 'email-test',
  registry: new Date().getTime() + '',
  password: 'password-test',
};

export const SignupTest = () => {
  // TEST: "registry" should be taken, should throw "CredentialsTakenError()"
  it('should validate business rules', validateBusinessRules);

  // TEST: should signup, no errors
  it('should signup', Signup);
};

const validateBusinessRules = async () => {
  try {
    expect.assertions(1);

    const registryWRONG: SignupDto = {
      ...authMock,
      registry: 'user2',
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
