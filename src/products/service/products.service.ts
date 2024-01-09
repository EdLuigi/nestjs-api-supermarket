import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateProductDto) {
    const product = await this.prisma.product.create({
      data: {
        name: dto.name,
        description: dto.description,
        discountPercentage: dto.discountPercentage,
        price: dto.price,
        stock: dto.stock,
        supplierId: dto.supplierId,
        createdAt: new Date(),
      },
    });

    return product;
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.product.findFirst({ where: { id } });
  }

  async findBySupplier(id: number) {
    return await this.prisma.product.findMany({ where: { supplierId: id } });
  }

  async update(id: number, dto: UpdateProductDto) {
    return await this.prisma.product.update({
      where: { id },
      data: {
        description: dto.description,
        discountPercentage: dto.discountPercentage,
        price: dto.price,
        stock: dto.stock,
        updatedAt: new Date(),
      },
    });
  }

  async remove(id: number) {
    await this.prisma.product.delete({
      where: { id },
    });
  }
}
