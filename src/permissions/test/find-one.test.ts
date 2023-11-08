import { BadFormatError } from '@/common/error/bad-format.error';

export const findOnePermissionTest = () => {
  // TEST: "id" in wrong format, should throw "BadFormatError()"
  it('should validate fields', validateFields);

  // TEST: should find first permission, no erros
  it('should find first permission', findFirstPermission);
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

const findFirstPermission = async () => {
  const permissions = await global.__CONTROLLER__.findAll();
  const firstPermission = permissions[0];

  const permission = await global.__CONTROLLER__.findOne(firstPermission.id);
  expect(!!permission).toBe(true);
};
