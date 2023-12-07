import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @IsInt()
  @Min(0)
  @ApiProperty()
  supplierId: number;

  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  description: string;

  @IsInt()
  @Min(0)
  @ApiProperty()
  stock: number;

  @IsNumber()
  @Min(0)
  @ApiProperty()
  price: number;

  @IsInt()
  @Min(0)
  @IsOptional()
  @ApiPropertyOptional()
  discount_percentage: number;
}
