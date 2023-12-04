import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateRoleDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  description: string;
}
