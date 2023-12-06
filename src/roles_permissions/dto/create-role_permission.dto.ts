import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, Min } from 'class-validator';

export class CreateRolePermissionDto {
  @IsInt()
  @Min(0)
  @IsNotEmpty()
  @ApiProperty()
  roleId: number;

  @IsInt()
  @Min(0)
  @IsNotEmpty()
  @ApiProperty()
  permissionId: number;
}
