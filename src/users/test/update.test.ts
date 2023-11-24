import { NotFoundUserError } from '@/common/error/not-found-user.error';
import { UpdateUserDto } from '@/users/dto/update-user.dto';

const userMock: UpdateUserDto = {
  name: 'name updated',
  email: 'email updated',
};

export const updateUserTest = () => {
  // TEST: "id" should not exist, should throw "NotFoundUserError()"
  it('should validate business rules', validateBusinessRules);

  // TEST: should update last user, no errors
  it('should update last user', updateLastUser);
};

const validateBusinessRules = async () => {
  try {
    expect.assertions(1);
    const id = '99999';
    await global.__CONTROLLER__.update(+id, userMock);
  } catch (error) {
    expect(error).toStrictEqual(new NotFoundUserError());
  }
};

const updateLastUser = async () => {
  const users = await global.__CONTROLLER__.findAll();
  const lastUser = users[users.length - 1];

  const updatedUser = await global.__CONTROLLER__.update(lastUser.id, userMock);
  expect(!!updatedUser).toBe(true);
};
