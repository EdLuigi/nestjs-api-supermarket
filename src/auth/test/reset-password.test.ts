import { IncorrectCredentialsError } from '@/common/error/incorrect-credentials.error';
import { NotFoundUserError } from '@/common/error/not-found-user.error';
import { ResetPasswordDto } from '../dto/reset-password.dto';

const userId = 2;
const resetObjectMock: ResetPasswordDto = {
  oldPassword: '123',
  newPassword: '1234',
};

export const ResetPasswordTest = () => {
  // TEST: "id" should not exist, should throw "NotFoundUserError()"
  //       "password" should not match, should throw "IncorrectCredentialsError()"
  it('should validate business rules', validateBusinessRules);

  // TEST: should reset password, no errors
  it('should reset password', ResetPassword);
};

const validateBusinessRules = async () => {
  expect.assertions(2);

  try {
    const id = '99999';
    await global.__CONTROLLER__.resetPassword(+id, resetObjectMock);
  } catch (error) {
    expect(error).toStrictEqual(new NotFoundUserError());
  }

  try {
    const credentialsWrong: ResetPasswordDto = {
      ...resetObjectMock,
      oldPassword: '1234',
    };
    await global.__CONTROLLER__.resetPassword(userId, credentialsWrong);
  } catch (error) {
    expect(error).toStrictEqual(new IncorrectCredentialsError());
  }
};

const ResetPassword = async () => {
  await global.__CONTROLLER__.resetPassword(userId, resetObjectMock);
};
