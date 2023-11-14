import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateRolePermissionDto {
  @IsInt()
  @IsNotEmpty()
  roleId: number;

  @IsInt()
  @IsNotEmpty()
  permissionId: number;
}
