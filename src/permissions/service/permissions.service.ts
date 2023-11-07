import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from '../dto/create-permission.dto';
import { UpdatePermissionDto } from '../dto/update-permission.dto';

@Injectable()
export class PermissionsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreatePermissionDto) {
    return await this.prisma.permission.create({
      data: {
        name: dto.name,
        description: dto.description,
        createdAt: new Date(),
      },
    });
  }

  async findAll() {
    return await this.prisma.permission.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.permission.findFirst({ where: { id } });
  }

  async findByName(name: string) {
    return await this.prisma.permission.findFirst({ where: { name } });
  }

  async update(id: number, updatePermissionDto: UpdatePermissionDto) {
    return await this.prisma.permission.update({
      where: { id },
      data: {
        ...updatePermissionDto,
        updatedAt: new Date(),
      },
    });
  }

  async remove(id: number) {
    await this.prisma.permission.delete({
      where: { id },
    });
  }
}
