import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, Min, NotEquals, ValidateIf } from 'class-validator';

export class UpdateUsersRoleDto {
  @IsNumber()
  @Min(0)
  @NotEquals(null)
  @ValidateIf((object, value) => value !== undefined)
  @ApiPropertyOptional()
  roleId: number;
}
