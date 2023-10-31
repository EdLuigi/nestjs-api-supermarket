import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSIONS_KEY } from '@/common/decorator/route-permission.decorator';
import { User } from '@/users/entities/user.entity';
import { UsersService } from '@/users/service/users.service';

@Injectable()
export class UserHasPermissionGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly usersService: UsersService,
  ) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const user: User = request.user;

      const requiredPermissions: string[] = this.reflector.getAll(
        PERMISSIONS_KEY,
        [context.getClass(), context.getHandler()],
      );

      return this.userHasPermission(user, requiredPermissions);
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException();
    }
  }

  async userHasPermission(
    user: User,
    requiredPermissions: string[],
  ): Promise<boolean> {
    const userPermissions = await this.findUserPermissions(+user.id);

    for (let element of requiredPermissions) {
      if (!!element) {
        if (userPermissions.includes(element)) continue;

        //TODO: criar exception específica e botar aqui
        throw new UnauthorizedException();
      }
    }

    return true;
  }

  async findUserPermissions(id: number): Promise<string[]> {
    const userData = await this.usersService.findMe(+id);
    return userData.permissions;
  }
}
