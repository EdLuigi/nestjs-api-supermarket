import { BadFormatError } from '@/common/error/bad-format.error';

export const findOneRoleTest = () => {
  // TEST: "id" in wrong format, should throw "BadFormatError()"
  it('should validate fields', validateFields);

  // TEST: should find first role, no erros
  it('should find first role', findFirstRole);
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

const findFirstRole = async () => {
  const roles = await global.__CONTROLLER__.findAll();
  const firstRole = roles[0];

  const role = await global.__CONTROLLER__.findOne(firstRole.id);
  expect(!!role).toBe(true);
};
