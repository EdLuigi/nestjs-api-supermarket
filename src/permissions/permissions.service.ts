import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PermissionsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreatePermissionDto) {
    const permission = await this.prisma.permission.create({
      data: {
        name: dto.name,
        description: dto.description,
        createdAt: new Date(),
      },
    });

    return permission;
  }

  findAll() {
    return this.prisma.permission.findMany();
  }

  findOne(id: number) {
    if (isNaN(id)) return null;
    return this.prisma.permission.findFirst({ where: { id } });
  }

  update(id: number, updatePermissionDto: UpdatePermissionDto) {
    if (isNaN(id)) return null;

    return this.prisma.permission.update({
      where: { id },
      data: {
        ...updatePermissionDto,
        updatedAt: new Date(),
      },
    });
  }

  async remove(id: number) {
    if (isNaN(id)) return null;
    const permission = await this.prisma.permission.findFirst({
      where: { id },
    });

    if (!permission) return;

    await this.prisma.permission.delete({
      where: { id },
    });
  }
}
