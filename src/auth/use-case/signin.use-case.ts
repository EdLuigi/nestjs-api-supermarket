import { BadFormatRegistryError } from '@/common/error/bad-format-registry.error';
import { IncorrectCredentialsError } from '@/common/error/incorrect-credentials.error';
import { UsersService } from '@/users/service/users.service';
import { Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { cnpj, cpf } from 'cpf-cnpj-validator';
import { SigninDto } from '../dto/signin.dto';
import { AuthService } from '../service/auth.service';

@Injectable()
export class SigninUseCase {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  async execute(signinData: SigninDto) {
    const registryIsValid =
      cpf.isValid(signinData.registry) || cnpj.isValid(signinData.registry);
    if (!registryIsValid) throw new BadFormatRegistryError();

    const registryExists = await this.usersService.findByRegistry(
      signinData.registry,
    );
    if (!registryExists) throw new IncorrectCredentialsError();

    const passwordMatches = await argon.verify(
      registryExists.password,
      signinData.password,
    );
    if (!passwordMatches) throw new IncorrectCredentialsError();

    return await this.authService.signToken(
      registryExists.id,
      registryExists.registry,
    );
  }
}
