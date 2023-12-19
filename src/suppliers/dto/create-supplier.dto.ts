import { registryDetails } from '@/utils/api-property-titles';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateSupplierDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  companyName: string;

  @IsString()
  @ApiProperty(registryDetails)
  registry: string;
}
