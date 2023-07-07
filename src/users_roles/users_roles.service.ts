import { Injectable } from '@nestjs/common';
import { CreateUsersRoleDto } from './dto/create-users_role.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class UsersRolesService {
  constructor(
    private prisma: PrismaService,
    private readonly usersService: UsersService,
    private readonly rolesService: RolesService,
  ) {}

  async create(createUsersRoleDto: CreateUsersRoleDto) {
    const user = await this.usersService.findOne(createUsersRoleDto.userId);
    if (!user) return "user doesn't exist";

    const role = await this.rolesService.findOne(createUsersRoleDto.roleId);
    if (!role) return "role doesn't exist";

    return await this.prisma.user_Role.create({
      data: {
        userId: createUsersRoleDto.userId,
        roleId: createUsersRoleDto.roleId,
        createdAt: new Date(),
      },
    });
  }

  findAll() {
    return this.prisma.user_Role.findMany();
  }

  findOne(id: number) {
    if (isNaN(id)) return null;
    return this.prisma.user_Role.findFirst({ where: { id } });
  }

  async remove(id: number) {
    if (isNaN(id)) return null;
    const permission = await this.prisma.user_Role.findFirst({
      where: { id },
    });

    if (!permission) return;

    await this.prisma.user_Role.delete({
      where: { id },
    });
  }
}
