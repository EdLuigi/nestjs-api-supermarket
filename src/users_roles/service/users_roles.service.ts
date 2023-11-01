import { PrismaService } from '@/prisma/prisma.service';
import { RolesService } from '@/roles/service/roles.service';
import { UsersService } from '@/users/service/users.service';
import { Injectable } from '@nestjs/common';
import { CreateUsersRoleDto } from '../dto/create-users_role.dto';
import { UpdateUsersRoleDto } from '../dto/update-users_role.dto';

@Injectable()
export class UsersRolesService {
  constructor(
    private prisma: PrismaService,
    private readonly usersService: UsersService,
    private readonly rolesService: RolesService,
  ) {}

  // TODO: REMOVE VALIDATIONS, REFACTOR ACCORDINGLY TO SIGNUP
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

  async findAll() {
    return await this.prisma.userRole.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.userRole.findFirst({ where: { id } });
  }

  async findByUserId(userId: number) {
    if (isNaN(userId)) return null;
    return await this.prisma.userRole.findFirst({ where: { userId } });
  }

  async update(userRoleId: number, dto: UpdateUsersRoleDto) {
    return await this.prisma.userRole.update({
      where: { id: userRoleId },
      data: {
        roleId: dto.roleId,
        updatedAt: new Date(),
      },
    });
  }

  // TODO: USE WHEN USER IS REMOVED
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
