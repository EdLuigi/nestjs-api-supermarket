import { IsNumber, NotEquals, ValidateIf } from 'class-validator';

export class UpdateUsersRoleDto {
  @IsNumber()
  @NotEquals(null)
  @ValidateIf((object, value) => value !== undefined)
  roleId: number;
}
