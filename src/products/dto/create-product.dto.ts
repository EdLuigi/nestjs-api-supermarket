import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsInt()
  supplierId: number;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsInt()
  stock: number;

  @IsNumber()
  price: number;

  @IsInt()
  @IsOptional()
  discount: number;
}
