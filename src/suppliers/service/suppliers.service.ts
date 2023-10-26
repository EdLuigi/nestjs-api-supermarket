import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateSupplierDto } from '../dto/create-supplier.dto';
import { UpdateSupplierDto } from '../dto/update-supplier.dto';

@Injectable()
export class SuppliersService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateSupplierDto) {
    const supplier = await this.prisma.supplier.create({
      data: {
        name: dto.name,
        companyName: dto.companyName,
        registry: dto.registry,
        createdAt: new Date(),
      },
    });

    return supplier;
  }

  async findAll() {
    return await this.prisma.supplier.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.supplier.findFirst({ where: { id } });
  }

  async update(id: number, dto: UpdateSupplierDto) {
    return await this.prisma.supplier.update({
      where: { id },
      data: {
        name: dto.name,
        companyName: dto.companyName,
        updatedAt: new Date(),
      },
    });
  }

  async remove(id: number) {
    await this.prisma.supplier.delete({
      where: { id },
    });
  }

  async findByRegistry(registry: string) {
    return await this.prisma.supplier.findFirst({ where: { registry } });
  }
}
