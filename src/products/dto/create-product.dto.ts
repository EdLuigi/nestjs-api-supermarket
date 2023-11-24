import { IsInt, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @IsInt()
  @Min(0)
  supplierId: number;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsInt()
  @Min(0)
  stock: number;

  @IsNumber()
  @Min(0)
  price: number;

  @IsInt()
  @Min(0)
  @IsOptional()
  discount_percentage: number;
}
