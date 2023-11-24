import { NotFoundRoleError } from '@/common/error/not-found-role.error';
import { UpdateRoleDto } from '../dto/update-role.dto';

const roleMock: UpdateRoleDto = {
  description: 'description updated',
};

export const updateRoleTest = () => {
  // TEST: "id" should not exist, should throw "NotFoundRoleError()"
  it('should validate business rules', validateBusinessRules);

  // TEST: should update last role, no errors
  it('should update last role', updateLastRole);
};

const validateBusinessRules = async () => {
  try {
    expect.assertions(1);
    const id = '99999';
    await global.__CONTROLLER__.update(+id, roleMock);
  } catch (error) {
    expect(error).toStrictEqual(new NotFoundRoleError());
  }
};

const updateLastRole = async () => {
  const roles = await global.__CONTROLLER__.findAll();
  const lastRole = roles[roles.length - 1];

  const updatedRole = await global.__CONTROLLER__.update(lastRole.id, roleMock);
  expect(!!updatedRole).toBe(true);
};
