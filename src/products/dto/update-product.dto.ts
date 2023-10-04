import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsInt()
  @IsOptional()
  stock: number;

  @IsNumber()
  @IsOptional()
  price: number;

  @IsInt()
  @IsOptional()
  discount: number;
}
