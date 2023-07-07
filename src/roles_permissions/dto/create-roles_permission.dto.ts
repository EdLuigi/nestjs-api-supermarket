import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateRolesPermissionDto {
  @IsNumber()
  @IsNotEmpty()
  roleId: number;

  @IsNumber()
  @IsNotEmpty()
  permissionId: number;
}
