import { BadFormatRegistryError } from '@/common/error/bad-format-registry.error';
import { CredentialsTakenError } from '@/common/error/credentials-taken.error';
import { EmailService } from '@/common/service/email.service';
import { UsersService } from '@/users/service/users.service';
import { CreateUsersRoleDto } from '@/users_roles/dto/create-users_role.dto';
import { UsersRolesService } from '@/users_roles/service/users_roles.service';
import { Injectable } from '@nestjs/common';
import { cnpj, cpf } from 'cpf-cnpj-validator';
import { SignupDto } from '../dto/signup.dto';
import { AuthService } from '../service/auth.service';

@Injectable()
export class SignupUseCase {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private usersRolesService: UsersRolesService,
    private emailService: EmailService,
  ) {}

  async execute(signupData: SignupDto) {
    const registryIsValid =
      cpf.isValid(signupData.registry) || cnpj.isValid(signupData.registry);
    if (!registryIsValid) throw new BadFormatRegistryError();

    const emailExists = await this.usersService.findByEmail(signupData.email);
    if (!!emailExists) throw new CredentialsTakenError('email');

    const registryExists = await this.usersService.findByRegistry(
      signupData.registry,
    );
    if (!!registryExists) throw new CredentialsTakenError('registry');

    const newUser = await this.authService.signup(signupData);

    const newUserRoleData: CreateUsersRoleDto = {
      userId: newUser.id,
      roleType: 'Employee',
    };

    await this.usersRolesService.create(newUserRoleData);

    const token = await this.authService.createEmailToken(
      newUser.id,
      newUser.email,
    );
    await this.emailService.send(token);
  }
}
