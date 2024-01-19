import { HttpStatus } from '@nestjs/common';

export const BadFormatIdErrorObj = {
  description: 'Id value is in a bad format',
  status: HttpStatus.BAD_REQUEST,
};

export const BadFormatRegistryErrorObj = {
  description: 'Registry value should be a valid CPF or CNPJ',
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

export const ExpiredTokenErrorObj = {
  description: 'Token is expired',
  status: HttpStatus.BAD_REQUEST,
};

export const AlreadyVerifiedEmailErrorObj = {
  description: 'Email was already verified',
  status: HttpStatus.BAD_REQUEST,
};

export const ForbiddenErrorObj = {
  description: 'User does not have the required permissions',
  status: HttpStatus.FORBIDDEN,
};

export const UnverifiedUserErrorObj = {
  description: 'User email is not verified',
  status: HttpStatus.FORBIDDEN,
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
  description: 'User Role does not exist',
  status: HttpStatus.NOT_FOUND,
};

export const NotFoundUserErrorObj = {
  description: 'User does not exist',
  status: HttpStatus.NOT_FOUND,
};

export const NotFoundEmailErrorObj = {
  description: 'Email is not registered',
  status: HttpStatus.NOT_FOUND,
};

export const NotFoundTokenErrorObj = {
  description: 'Token does not exist',
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

export const EmailNotSentErrorObj = {
  description: 'Could not send email',
  status: HttpStatus.INTERNAL_SERVER_ERROR,
};
