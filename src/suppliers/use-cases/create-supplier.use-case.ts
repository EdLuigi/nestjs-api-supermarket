import { SuppliersService } from '@/suppliers/service/suppliers.service';
import { Injectable } from '@nestjs/common';
import { CreateSupplierDto } from '../dto/create-supplier.dto';

@Injectable()
export class CreateSupplierUseCase {
  constructor(private suppliersService: SuppliersService) {}

  async execute(supplierData: CreateSupplierDto) {
    return await this.suppliersService.create(supplierData);
  }
}
