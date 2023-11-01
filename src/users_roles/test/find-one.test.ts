import { BadFormatError } from '@/common/error/bad-format.error';

export const findOneUserRoleTest = () => {
  // TEST: "id" in wrong format, should throw "BadFormatError()"
  it('should validate fields', validateFields);

  // TEST: should find first userRole, no erros
  it('should find first user role', findFirstUserRole);
};

const validateFields = async () => {
  try {
    expect.assertions(1);

    const id_WRONG = 'a';
    await global.__CONTROLLER__.findOne(id_WRONG);
  } catch (error) {
    expect(error).toStrictEqual(new BadFormatError('id'));
  }
};

const findFirstUserRole = async () => {
  const usersRoles = await global.__CONTROLLER__.findAll();
  const firstUserRole = usersRoles[0];

  const userRole = await global.__CONTROLLER__.findOne(firstUserRole.id);
  expect(userRole.id === firstUserRole.id).toBe(true);
};
