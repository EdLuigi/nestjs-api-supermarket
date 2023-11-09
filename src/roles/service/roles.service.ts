import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';

@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateRoleDto) {
    return await this.prisma.role.create({
      data: {
        name: dto.name,
        description: dto.description,
        createdAt: new Date(),
      },
    });
  }

  async findAll() {
    return await this.prisma.role.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.role.findFirst({ where: { id } });
  }

  async findByName(name: string) {
    return await this.prisma.role.findFirst({ where: { name } });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    return await this.prisma.role.update({
      where: { id },
      data: {
        ...updateRoleDto,
        updatedAt: new Date(),
      },
    });
  }

  async remove(id: number) {
    await this.prisma.role.delete({
      where: { id },
    });
  }
}
