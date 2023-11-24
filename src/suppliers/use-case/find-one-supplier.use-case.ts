import { Injectable } from '@nestjs/common';
import { SuppliersService } from '../service/suppliers.service';

@Injectable()
export class FindOneSupplierUseCase {
  constructor(private suppliersService: SuppliersService) {}

  async execute(id: number) {
    return await this.suppliersService.findOne(id);
  }
}
