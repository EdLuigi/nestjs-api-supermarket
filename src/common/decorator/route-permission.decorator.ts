import { SetMetadata } from '@nestjs/common';

export const PERMISSIONS_KEY = 'permission';
export const RoutePermission = (permissions: string) =>
  SetMetadata(PERMISSIONS_KEY, permissions);
