import { IsInt, IsNotEmpty, Min } from 'class-validator';

export class CreateRolePermissionDto {
  @IsInt()
  @Min(0)
  @IsNotEmpty()
  roleId: number;

  @IsInt()
  @Min(0)
  @IsNotEmpty()
  permissionId: number;
}
