import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateUsersRoleDto {
  @IsNumber()
  @IsNotEmpty()
  roleId: number;
}
