import { PermissionType } from '@/utils/permission-types';

export class Permission {
  id?: number;
  name: PermissionType;
  description?: string;
  createdAt: Date;
  updatedAt?: Date;
}
