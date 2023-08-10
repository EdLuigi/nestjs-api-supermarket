import { Permission } from 'src/permissions/entities/permission.entity';

export const permissionsSeed: Permission[] = [
  {
    name: 'create-role',
    createdAt: new Date(),
  },
  {
    name: 'find-all-roles',
    createdAt: new Date(),
  },
  {
    name: 'find-role',
    createdAt: new Date(),
  },
  {
    name: 'update-role',
    createdAt: new Date(),
  },
  {
    name: 'delete-role',
    createdAt: new Date(),
  },
  {
    name: 'find-me',
    createdAt: new Date(),
  },
  {
    name: 'find-all-users',
    createdAt: new Date(),
  },
  {
    name: 'find-user',
    createdAt: new Date(),
  },
  {
    name: 'update-me',
    createdAt: new Date(),
  },
  {
    name: 'update-user',
    createdAt: new Date(),
  },
  {
    name: 'delete-user',
    createdAt: new Date(),
  },
  {
    name: 'create-permission',
    createdAt: new Date(),
  },
  {
    name: 'find-all-permissions',
    createdAt: new Date(),
  },
  {
    name: 'find-permission',
    createdAt: new Date(),
  },
  {
    name: 'update-permission',
    createdAt: new Date(),
  },
  {
    name: 'delete-permission',
    createdAt: new Date(),
  },
  {
    name: 'find-all-users-roles',
    createdAt: new Date(),
  },
  {
    name: 'find-user-role',
    createdAt: new Date(),
  },
  {
    name: 'create-role-permission',
    createdAt: new Date(),
  },
  {
    name: 'find-all-roles-permissions',
    createdAt: new Date(),
  },
  {
    name: 'find-role-permission',
    createdAt: new Date(),
  },
  {
    name: 'delete-role-permission',
    createdAt: new Date(),
  },
  {
    name: 'find-user-role-by-user-id',
    createdAt: new Date(),
  },
  {
    name: 'update-user-role',
    createdAt: new Date(),
  },
];
