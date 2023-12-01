import { HttpStatus } from '@nestjs/common';

export const BadFormatIdErrorObj = {
  message: `Variable id is in a bad format`,
  statusCode: HttpStatus.BAD_REQUEST,
};

export const CredentialsTakenErrorObj = {
  message: `Credentials already taken`,
  statusCode: HttpStatus.BAD_REQUEST,
};

export const DuplicateKeyValueErrorObj = {
  message: `Key value is duplicated: `,
  statusCode: HttpStatus.BAD_REQUEST,
};

export const ForbiddenErrorObj = {
  message: 'User does not have the required permissions',
  statusCode: HttpStatus.FORBIDDEN,
};

export const ForeignKeyPermissionErrorObj = {
  message: 'Permission has foreign keys and cannot be removed',
  statusCode: HttpStatus.BAD_REQUEST,
};

export const ForeignKeyRoleErrorObj = {
  message: 'Role has foreign keys and cannot be removed',
  statusCode: HttpStatus.BAD_REQUEST,
};

export const ForeignKeySupplierErrorObj = {
  message: 'Supplier has foreign keys and cannot be removed',
  statusCode: HttpStatus.BAD_REQUEST,
};

export const IncorrectCredentialsErrorObj = {
  message: 'Credentials incorrect',
  statusCode: HttpStatus.BAD_REQUEST,
};

export const NotFoundPermissionErrorObj = {
  message: 'Permission does not exist',
  statusCode: HttpStatus.NOT_FOUND,
};

export const NotFoundProductErrorObj = {
  message: 'Product does not exist',
  statusCode: HttpStatus.NOT_FOUND,
};

export const NotFoundRolePermissionErrorObj = {
  message: 'Role-permission does not exist',
  statusCode: HttpStatus.NOT_FOUND,
};

export const NotFoundRoleErrorObj = {
  message: 'Role does not exist',
  statusCode: HttpStatus.NOT_FOUND,
};

export const NotFoundSupplierErrorObj = {
  message: 'Supplier does not exist',
  statusCode: HttpStatus.NOT_FOUND,
};

export const NotFoundUserRoleErrorObj = {
  message: 'User role does not exist',
  statusCode: HttpStatus.NOT_FOUND,
};

export const NotFoundUserErrorObj = {
  message: 'User does not exist',
  statusCode: HttpStatus.NOT_FOUND,
};

export const UnauthorizedErrorObj = {
  message: `User must be logged in to access this feature`,
  statusCode: HttpStatus.UNAUTHORIZED,
};

export const InternalServerErrorObj = {
  message: 'Internal server error',
  statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
};
