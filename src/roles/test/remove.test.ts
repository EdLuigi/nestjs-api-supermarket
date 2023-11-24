import { ForeignKeyRoleError } from '@/common/error/foreign-key-role-error';
import { NotFoundRoleError } from '@/common/error/not-found-role.error';

export const removeRoleTest = () => {
  // TEST: "id" should not exist, should throw "NotFoundRoleError()"
  //       Role should have foreign keys, should throw "ForeignKeyRoleError()"
  it('should validate business rules', validateBusinessRules);

  // TEST: should remove last role, no erros
  it('should remove last role', removeLastRole);
};

const validateBusinessRules = async () => {
  expect.assertions(2);

  try {
    const id = '99999';
    await global.__CONTROLLER__.remove(+id);
  } catch (error) {
    expect(error).toStrictEqual(new NotFoundRoleError());
  }

  try {
    const id = '1';
    await global.__CONTROLLER__.remove(+id);
  } catch (error) {
    expect(error).toStrictEqual(new ForeignKeyRoleError());
  }
};

const removeLastRole = async () => {
  const roles = await global.__CONTROLLER__.findAll();
  const lastRole = roles[roles.length - 1];

  await global.__CONTROLLER__.remove(lastRole.id);
};
