import { RoleType } from '@/utils/role-types';

export class Role {
  id?: number;
  name: RoleType;
  description?: string;
  createdAt: Date;
  updatedAt?: Date;
}
