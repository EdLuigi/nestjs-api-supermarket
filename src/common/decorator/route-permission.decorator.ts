import { PermissionType } from '@/util/permission-types';
import { SetMetadata } from '@nestjs/common';

export const PERMISSIONS_KEY = 'permission';
export const RoutePermission = (permissions: PermissionType) =>
  SetMetadata(PERMISSIONS_KEY, permissions);
