import { registryDetails } from '@/utils/api-property-titles';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class ResendEmailDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty(registryDetails)
  email: string;
}
