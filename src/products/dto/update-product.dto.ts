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
  description: string;

  @IsInt()
  @Min(0)
  @NotEquals(null)
  @ValidateIf((object, value) => value !== undefined)
  stock: number;

  @IsNumber()
  @Min(0)
  @NotEquals(null)
  @ValidateIf((object, value) => value !== undefined)
  price: number;

  @IsInt()
  @Min(0)
  @IsOptional()
  discount_percentage: number;
}
