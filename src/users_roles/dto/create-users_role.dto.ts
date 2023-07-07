import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUsersRoleDto {
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsNumber()
  @IsNotEmpty()
  roleId: number;
}
