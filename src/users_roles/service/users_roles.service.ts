import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUsersRoleDto } from '../dto/create-users_role.dto';
import { UpdateUsersRoleDto } from '../dto/update-users_role.dto';

@Injectable()
export class UsersRolesService {
  constructor(private prisma: PrismaService) {}

  async create(createUsersRoleDto: CreateUsersRoleDto) {
    const role = await this.prisma.role.findFirst({
      where: { name: createUsersRoleDto.roleType },
    });

    await this.prisma.userRole.create({
      data: {
        userId: createUsersRoleDto.userId,
        roleId: role.id,
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
    return await this.prisma.userRole.findFirst({ where: { userId } });
  }

  async findByRoleId(roleId: number) {
    return await this.prisma.userRole.findMany({ where: { roleId } });
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

  async remove(id: number) {
    await this.prisma.userRole.delete({
      where: { id },
    });
  }
}
