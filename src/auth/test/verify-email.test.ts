import { ExpiredTokenError } from '@/common/error/expired-token.error';
import { NotFoundTokenError } from '@/common/error/not-found-token.error';

export const VerifyEmailTest = () => {
  // TEST: token should not exist, should throw "NotFoundTokenError()"
  //       token should be expired, should throw "ExpiredTokenError()"
  it('should validate business rules', validateBusinessRules);

  // TEST: should verify user email, no errors
  it('should verify user email', VerifyEmail);
};

const validateBusinessRules = async () => {
  expect.assertions(2);

  try {
    const tokenWrong = 'a';
    await global.__CONTROLLER__.verifyEmail(tokenWrong);
  } catch (error) {
    expect(error).toStrictEqual(new NotFoundTokenError());
  }

  try {
    const expiredToken = '2';
    await global.__CONTROLLER__.verifyEmail(expiredToken);
  } catch (error) {
    expect(error).toStrictEqual(new ExpiredTokenError());
  }
};

const VerifyEmail = async () => {
  const emailToken = '1';
  const signToken = await global.__CONTROLLER__.verifyEmail(emailToken);
  expect(!!signToken).toBe(true);
};
