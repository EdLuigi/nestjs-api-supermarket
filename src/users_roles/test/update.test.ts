import { BadFormatError } from '@/common/error/bad-format.error';
import { NotFoundRoleError } from '@/common/error/not-found-role.error';
import { NotFoundUserRoleError } from '@/common/error/not-found-user-role.error';
import { NotFoundUserError } from '@/common/error/not-found-user.error';
import { UpdateUsersRoleDto } from '../dto/update-users_role.dto';

const userRoleMock: UpdateUsersRoleDto = {
  roleId: 1,
};

export const updateUserRoleTest = () => {
  // TEST: "id" in wrong format, should throw "BadFormatError()"
  it('should validate fields', validateFields);

  // TEST: user should not exist, should throw "NotFoundUserError()",
  //       role should not exist, should throw "NotFoundRoleError()",
  //       userRole should not exist, should throw "NotFoundUserRoleError()",
  it('should validate business rules', validateBusinessRules);

  // TEST: should update last userRole, no errors
  it('should update last userRole', updateLastUserRole);
};

const validateFields = async () => {
  try {
    expect.assertions(1);

    const id_WRONG = 'a';
    await global.__CONTROLLER__.update(id_WRONG, userRoleMock);
  } catch (error) {
    expect(error).toStrictEqual(new BadFormatError('id'));
  }
};

const validateBusinessRules = async () => {
  expect.assertions(3);

  try {
    const id_WRONG = '99999';
    await global.__CONTROLLER__.update(id_WRONG, userRoleMock);
  } catch (error) {
    expect(error).toStrictEqual(new NotFoundUserError());
  }

  try {
    const id = '1';
    const userRoleMock_WRONG: UpdateUsersRoleDto = { roleId: 0 };

    await global.__CONTROLLER__.update(id, userRoleMock_WRONG);
  } catch (error) {
    expect(error).toStrictEqual(new NotFoundRoleError());
  }

  try {
    const id_WRONG = '4'; //user 4 has no userRole
    await global.__CONTROLLER__.update(id_WRONG, userRoleMock);
  } catch (error) {
    expect(error).toStrictEqual(new NotFoundUserRoleError());
  }
};

const updateLastUserRole = async () => {
  const usersRoles = await global.__CONTROLLER__.findAll();
  const lastUserRole = usersRoles[usersRoles.length - 1];

  const updatedUserRole = await global.__CONTROLLER__.update(
    lastUserRole.userId,
    userRoleMock,
  );
  expect(!!updatedUserRole).toBe(true);
};
