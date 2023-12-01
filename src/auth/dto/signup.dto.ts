import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class SignupDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  name: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  registry: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string;
}
