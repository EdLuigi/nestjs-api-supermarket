import { IsNotEmpty, IsString } from 'class-validator';

export class SigninDto {
  @IsString()
  @IsNotEmpty()
  registry: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
