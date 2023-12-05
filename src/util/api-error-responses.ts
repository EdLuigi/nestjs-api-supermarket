import { HttpStatus } from '@nestjs/common';

export const BadFormatIdErrorObj = {
  description: 'Id value is in a bad format',
  status: HttpStatus.BAD_REQUEST,
};

export const CredentialsTakenErrorObj = {
  description: 'Credentials already taken',
  status: HttpStatus.BAD_REQUEST,
};

export const DuplicateKeyValueErrorObj = {
  description: 'Key value is duplicated',
  status: HttpStatus.BAD_REQUEST,
};

export const ForbiddenErrorObj = {
  description: 'User does not have the required permissions',
  status: HttpStatus.FORBIDDEN,
};

export const ForeignKeyPermissionErrorObj = {
  description: 'Permission has foreign keys and cannot be removed',
  status: HttpStatus.BAD_REQUEST,
};

export const ForeignKeyRoleErrorObj = {
  description:
    'Role has user-role/role-permission foreign keys and cannot be removed',
  status: HttpStatus.BAD_REQUEST,
};

export const ForeignKeySupplierErrorObj = {
  description: 'Supplier has foreign keys and cannot be removed',
  status: HttpStatus.BAD_REQUEST,
};

export const IncorrectCredentialsErrorObj = {
  description: 'Credentials incorrect',
  status: HttpStatus.BAD_REQUEST,
};

export const NotFoundPermissionErrorObj = {
  description: 'Permission does not exist',
  status: HttpStatus.NOT_FOUND,
};

export const NotFoundProductErrorObj = {
  description: 'Product does not exist',
  status: HttpStatus.NOT_FOUND,
};

export const NotFoundRolePermissionErrorObj = {
  description: 'Role-permission does not exist',
  status: HttpStatus.NOT_FOUND,
};

export const NotFoundRoleErrorObj = {
  description: 'Role does not exist',
  status: HttpStatus.NOT_FOUND,
};

export const NotFoundSupplierErrorObj = {
  description: 'Supplier does not exist',
  status: HttpStatus.NOT_FOUND,
};

export const NotFoundUserRoleErrorObj = {
  description: 'User role does not exist',
  status: HttpStatus.NOT_FOUND,
};

export const NotFoundUserErrorObj = {
  description: 'User does not exist',
  status: HttpStatus.NOT_FOUND,
};

export const UnauthorizedErrorObj = {
  description: 'User must be logged in to access this feature',
  status: HttpStatus.UNAUTHORIZED,
};

export const InternalServerErrorObj = {
  description: 'Internal server error',
  status: HttpStatus.INTERNAL_SERVER_ERROR,
};
