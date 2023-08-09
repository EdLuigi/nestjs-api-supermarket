import { Role } from 'src/roles/entities/role.entity';

export const rolesSeed: Role[] = [
  {
    name: 'Admin',
    createdAt: new Date(),
  },
  {
    name: 'Manager',
    createdAt: new Date(),
  },
  {
    name: 'Employee',
    createdAt: new Date(),
  },
];
