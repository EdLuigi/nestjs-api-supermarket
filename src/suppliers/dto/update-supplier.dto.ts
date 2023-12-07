import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, NotEquals, ValidateIf } from 'class-validator';

export class UpdateSupplierDto {
  @IsString()
  @NotEquals(null)
  @ValidateIf((object, value) => value !== undefined)
  @ApiPropertyOptional()
  name: string;

  @IsString()
  @NotEquals(null)
  @ValidateIf((object, value) => value !== undefined)
  @ApiPropertyOptional()
  companyName: string;
}
