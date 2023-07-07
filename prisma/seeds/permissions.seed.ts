import { Permission } from 'src/permissions/entities/permission.entity';

export const permissionsSeed: Permission[] = [
  {
    id: 1,
    name: 'auth',
    createdAt: new Date(),
  },
  {
    id: 2,
    name: 'users',
    createdAt: new Date(),
  },
  {
    id: 3,
    name: 'permissions',
    createdAt: new Date(),
  },
  {
    id: 4,
    name: 'roles',
    createdAt: new Date(),
  },
  {
    id: 5,
    name: 'roles_permissions',
    createdAt: new Date(),
  },
  {
    id: 6,
    name: 'users_roles',
    createdAt: new Date(),
  },
];
