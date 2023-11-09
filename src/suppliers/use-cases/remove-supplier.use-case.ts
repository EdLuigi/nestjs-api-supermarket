import { BadFormatError } from '@/common/error/bad-format.error';
import { ForeignKeySupplierError } from '@/common/error/foreign-key-supplier-error';
import { NotFoundSupplierError } from '@/common/error/not-found-supplier.error';
import { ProductsService } from '@/products/service/products.service';
import { Injectable } from '@nestjs/common';
import { SuppliersService } from '../service/suppliers.service';

@Injectable()
export class RemoveSupplierUseCase {
  constructor(
    private suppliersService: SuppliersService,
    private productsService: ProductsService,
  ) {}

  async execute(id: number) {
    if (!Number.isInteger(+id)) throw new BadFormatError('id');

    const supplierExists = await this.suppliersService.findOne(id);
    if (!supplierExists) throw new NotFoundSupplierError();

    const productsBySupplier = await this.productsService.findBySupplier(id);
    if (productsBySupplier.length > 0) throw new ForeignKeySupplierError();

    return await this.suppliersService.remove(id);
  }
}
