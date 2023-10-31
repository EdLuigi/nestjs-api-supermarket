import { CredentialsTakenError } from '@/common/error/credentials-taken.error';
import { UsersService } from '@/users/service/users.service';
import { CreateUsersRoleDto } from '@/users_roles/dto/create-users_role.dto';
import { UsersRolesService } from '@/users_roles/service/users_roles.service';
import { Injectable } from '@nestjs/common';
import { SignupDto } from '../dto/signup.dto';
import { AuthService } from '../service/auth.service';

@Injectable()
export class SignupUseCase {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private usersRolesService: UsersRolesService,
  ) {}

  async execute(signupData: SignupDto) {
    const registryExists = await this.usersService.findByRegistry(
      signupData.registry,
    );
    if (!!registryExists) throw new CredentialsTakenError();

    const newUser = await this.authService.signup(signupData);

    const newUserRoleData: CreateUsersRoleDto = {
      userId: newUser.id,
      // TODO: SPECIFY "roleId" TYPES IN "CreateUsersRoleDto"
      roleId: 3,
    };

    await this.usersRolesService.create(newUserRoleData);

    return await this.authService.signToken(newUser.id, newUser.registry);
  }
}
