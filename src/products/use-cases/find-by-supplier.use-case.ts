import { BadFormatError } from '@/common/error/bad-format.error';
import { SuppliersService } from '@/suppliers/service/suppliers.service';
import { Injectable } from '@nestjs/common';
import { ProductsService } from '../service/products.service';
import { NotFoundSupplierError } from '@/common/error/not-found-supplier.error';

@Injectable()
export class FindBySupplierUseCase {
  constructor(
    private productsService: ProductsService,
    private suppliersService: SuppliersService,
  ) {}

  async execute(supplierId: number) {
    if (!Number.isInteger(+supplierId)) throw new BadFormatError('supplierId');

    const supplierExists = await this.suppliersService.findOne(supplierId);
    if (!supplierExists) throw new NotFoundSupplierError();

    return await this.productsService.findBySupplier(supplierId);
  }
}
