import { BadFormatError } from '@/common/error/bad-format.error';
import { Injectable } from '@nestjs/common';
import { SuppliersService } from '../service/suppliers.service';

@Injectable()
export class FindOneSupplierUseCase {
  constructor(private suppliersService: SuppliersService) {}

  async execute(id: number) {
    if (isNaN(id)) throw new BadFormatError('id');

    return await this.suppliersService.findOne(id);
  }
}
