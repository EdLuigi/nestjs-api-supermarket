import { AlreadyVerifiedEmailError } from '@/common/error/already-verified-email.error';
import { NotFoundEmailError } from '@/common/error/not-found-email.error';
import { ResendEmailDto } from '../dto/resend-email.dto';

export const ResendEmailTokentTest = () => {
  // TEST: "email" should not exist, should throw "NotFoundEmailError()"
  //       "email" should already be verified, should throw "AlreadyVerifiedEmailError()"
  it('should validate business rules', validateBusinessRules);

  // TEST: should send email, no errors
  it('should resend email token', ResendEmailToken);
};

const validateBusinessRules = async () => {
  expect.assertions(2);

  try {
    const emailWRONG: ResendEmailDto = { email: 'error@email.com' };
    await global.__CONTROLLER__.resendEmailToken(emailWRONG);
  } catch (error) {
    expect(error).toStrictEqual(new NotFoundEmailError());
  }

  try {
    const emailWRONG: ResendEmailDto = { email: 'user2@email.com' };
    await global.__CONTROLLER__.resendEmailToken(emailWRONG);
  } catch (error) {
    expect(error).toStrictEqual(new AlreadyVerifiedEmailError());
  }
};

const ResendEmailToken = async () => {
  const email: ResendEmailDto = { email: 'email_test@email.com' };
  await global.__CONTROLLER__.resendEmailToken(email);
};
