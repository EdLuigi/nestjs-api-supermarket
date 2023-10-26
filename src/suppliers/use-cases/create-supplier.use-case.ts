import { DuplicateKeyValueError } from '@/common/error/duplicate-key-value.error';
import { SuppliersService } from '@/suppliers/service/suppliers.service';
import { Injectable } from '@nestjs/common';
import { CreateSupplierDto } from '../dto/create-supplier.dto';

@Injectable()
export class CreateSupplierUseCase {
  constructor(private suppliersService: SuppliersService) {}

  async execute(supplierData: CreateSupplierDto) {
    const registryExists = await this.suppliersService.findByRegistry(
      supplierData.registry,
    );
    if (!!registryExists) throw new DuplicateKeyValueError('registry');

    return await this.suppliersService.create(supplierData);
  }
}
