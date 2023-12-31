import { ForeignKeyPermissionError } from '@/common/error/foreign-key-permission-error';
import { NotFoundPermissionError } from '@/common/error/not-found-permission.error';

export const removePermissionTest = () => {
  // TEST: "id" should not exist, should throw "NotFoundPermissionError()"
  //       Permission should have foreign keys, should throw "ForeignKeyPermissionError()"
  it('should validate business rules', validateBusinessRules);

  // TEST: should remove last permission, no erros
  it('should remove last permission', removeLastPermission);
};

const validateBusinessRules = async () => {
  expect.assertions(2);

  try {
    const id = '99999';
    await global.__CONTROLLER__.remove(+id);
  } catch (error) {
    expect(error).toStrictEqual(new NotFoundPermissionError());
  }

  try {
    const id = '1';
    await global.__CONTROLLER__.remove(+id);
  } catch (error) {
    expect(error).toStrictEqual(new ForeignKeyPermissionError());
  }
};

const removeLastPermission = async () => {
  const permissions = await global.__CONTROLLER__.findAll();
  const lastPermission = permissions[permissions.length - 1];

  await global.__CONTROLLER__.remove(lastPermission.id);
};
