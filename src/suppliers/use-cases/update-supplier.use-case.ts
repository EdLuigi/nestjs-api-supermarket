import { NotFoundSupplierError } from '@/common/error/not-found-supplier.error';
import { Injectable } from '@nestjs/common';
import { UpdateSupplierDto } from '../dto/update-supplier.dto';
import { SuppliersService } from '../service/suppliers.service';

@Injectable()
export class UpdateSupplierUseCase {
  constructor(private suppliersService: SuppliersService) {}

  async execute(id: number, supplierData: UpdateSupplierDto) {
    const supplierExists = await this.suppliersService.findOne(id);
    if (!supplierExists) throw new NotFoundSupplierError();

    return await this.suppliersService.update(id, supplierData);
  }
}
