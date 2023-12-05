import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdatePermissionDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  description: string;
}
