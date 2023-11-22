import {
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  NotEquals,
  ValidateIf,
} from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  description: string;

  @IsInt()
  @NotEquals(null)
  @ValidateIf((object, value) => value !== undefined)
  stock: number;

  @IsNumber()
  @NotEquals(null)
  @ValidateIf((object, value) => value !== undefined)
  price: number;

  @IsInt()
  @IsOptional()
  discount: number;
}
