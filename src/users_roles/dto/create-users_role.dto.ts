import { RoleType } from '@/common/role-types';
import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateUsersRoleDto {
  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  userId: number;

  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  roleType: RoleType;
}
