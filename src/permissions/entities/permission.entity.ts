import { PermissionType } from '@/common/decorator/route-permission.decorator';

export class Permission {
  id?: number;
  name: PermissionType;
  description?: string;
  createdAt: Date;
  updatedAt?: Date;
}
