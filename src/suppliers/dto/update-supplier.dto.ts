import { IsString, NotEquals, ValidateIf } from 'class-validator';

export class UpdateSupplierDto {
  @IsString()
  @NotEquals(null)
  @ValidateIf((object, value) => value !== undefined)
  name: string;

  @IsString()
  @NotEquals(null)
  @ValidateIf((object, value) => value !== undefined)
  companyName: string;
}
