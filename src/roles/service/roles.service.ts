import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateRoleDto) {
    const role = await this.prisma.role.create({
      data: {
        name: dto.name,
        description: dto.description,
        createdAt: new Date(),
      },
    });

    return role;
  }

  findAll() {
    return this.prisma.role.findMany();
  }

  findOne(id: number) {
    if (Number.isInteger(+id)) return null;
    return this.prisma.role.findFirst({ where: { id } });
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    if (Number.isInteger(+id)) return null;

    return this.prisma.role.update({
      where: { id },
      data: {
        ...updateRoleDto,
        updatedAt: new Date(),
      },
    });
  }

  async remove(id: number) {
    if (Number.isInteger(+id)) return null;
    const role = await this.prisma.role.findFirst({
      where: { id },
    });

    if (!role) return;

    await this.prisma.role.delete({
      where: { id },
    });
  }
}
