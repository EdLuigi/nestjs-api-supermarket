import { registryDetails } from '@/utils/api-property-titles';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SigninDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty(registryDetails)
  registry: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string;
}
