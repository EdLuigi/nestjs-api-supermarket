import { Injectable } from '@nestjs/common';
import { SuppliersService } from '../service/suppliers.service';

@Injectable()
export class FindAllSuppliersUseCase {
  constructor(private suppliersService: SuppliersService) {}

  async execute() {
    return await this.suppliersService.findAll();
  }
}
