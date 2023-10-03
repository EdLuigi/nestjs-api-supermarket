import { IsString } from 'class-validator';

export class CreateSupplierDto {
  @IsString()
  name: string;

  @IsString()
  companyName: string;

  @IsString()
  registry: string;
}
