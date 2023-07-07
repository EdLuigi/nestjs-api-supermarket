import { Role } from 'src/roles/entities/role.entity';

export const rolesSeed: Role[] = [
  {
    id: 1,
    name: 'Admin',
    createdAt: new Date(),
  },
  {
    id: 2,
    name: 'Manager',
    createdAt: new Date(),
  },
  {
    id: 3,
    name: 'Employee',
    createdAt: new Date(),
  },
];
