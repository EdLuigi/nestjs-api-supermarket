import { BadFormatError } from '@/common/error/bad-format.error';
import { NotFoundPermissionError } from '@/common/error/not-found-permission.error';
import { UpdatePermissionDto } from '../dto/update-permission.dto';

const permissionMock: UpdatePermissionDto = {
  description: 'description updated',
};

export const updatePermissionTest = () => {
  // TEST: "id" in wrong format, should throw "BadFormatError()"
  it('should validate fields', validateFields);

  // TEST: "id" should not exist, should throw "NotFoundPermissionError()"
  it('should validate business rules', validateBusinessRules);

  // TEST: should update last permission, no errors
  it('should update last permission', updateLastPermission);
};

const validateFields = async () => {
  try {
    expect.assertions(1);

    const id_WRONG = 'a';
    await global.__CONTROLLER__.update(id_WRONG, permissionMock);
  } catch (error) {
    expect(error).toStrictEqual(new BadFormatError('id'));
  }
};

const validateBusinessRules = async () => {
  try {
    expect.assertions(1);
    const id = '99999';
    await global.__CONTROLLER__.update(id, permissionMock);
  } catch (error) {
    expect(error).toStrictEqual(new NotFoundPermissionError());
  }
};

const updateLastPermission = async () => {
  const permissions = await global.__CONTROLLER__.findAll();
  const lastPermission = permissions[permissions.length - 1];

  const updatedPermission = await global.__CONTROLLER__.update(
    lastPermission.id,
    permissionMock,
  );
  expect(!!updatedPermission).toBe(true);
};
