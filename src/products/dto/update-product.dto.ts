import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  NotEquals,
  ValidateIf,
} from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  description: string;

  @IsInt()
  @Min(0)
  @NotEquals(null)
  @ValidateIf((object, value) => value !== undefined)
  @ApiProperty()
  stock: number;

  @IsNumber()
  @Min(0)
  @NotEquals(null)
  @ValidateIf((object, value) => value !== undefined)
  @ApiProperty()
  price: number;

  @IsInt()
  @Min(0)
  @IsOptional()
  @ApiPropertyOptional()
  discountPercentage: number;
}
