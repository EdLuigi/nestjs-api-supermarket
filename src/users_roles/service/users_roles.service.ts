import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RolesService } from 'src/roles/service/roles.service';
import { UsersService } from 'src/users/service/users.service';
import { CreateUsersRoleDto } from '../dto/create-users_role.dto';
import { UpdateUsersRoleDto } from '../dto/update-users_role.dto';

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

    const userRole = await this.prisma.userRole.findFirst({
      where: { userId: user.id },
    });
    if (!!userRole) return 'user already has a role';

    return await this.prisma.userRole.create({
      data: {
        userId: createUsersRoleDto.userId,
        roleId: createUsersRoleDto.roleId,
        createdAt: new Date(),
      },
    });
  }

  findAll() {
    return this.prisma.userRole.findMany();
  }

  findOne(id: number) {
    if (isNaN(id)) return null;
    return this.prisma.userRole.findFirst({ where: { id } });
  }

  findByUserId(userId: number) {
    if (isNaN(userId)) return null;
    return this.prisma.userRole.findFirst({ where: { userId } });
  }

  async update(userId: number, updateUserRoleDto: UpdateUsersRoleDto) {
    if (isNaN(userId)) return null;

    const user = await this.usersService.findOne(userId);
    if (!user) return "user doesn't exist";

    const role = await this.rolesService.findOne(updateUserRoleDto.roleId);
    if (!role) return "role doesn't exist";

    const userRole = await this.prisma.userRole.findFirst({
      where: { userId },
    });

    if (!userRole) return "user role doesn't exist";

    return this.prisma.userRole.update({
      where: { id: userRole.id },
      data: {
        ...updateUserRoleDto,
        updatedAt: new Date(),
      },
    });
  }

  async remove(id: number) {
    if (isNaN(id)) return null;
    const permission = await this.prisma.userRole.findFirst({
      where: { id },
    });

    if (!permission) return;

    await this.prisma.userRole.delete({
      where: { id },
    });
  }
}
