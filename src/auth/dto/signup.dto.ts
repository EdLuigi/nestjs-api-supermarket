import { registryDetails } from '@/utils/api-property-titles';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class SignupDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty(registryDetails)
  registry: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string;
}
