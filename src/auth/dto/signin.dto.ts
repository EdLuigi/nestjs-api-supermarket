import { registryDetails } from '@/utils/api-property-titles';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SigninDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty(registryDetails)
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string;
}
