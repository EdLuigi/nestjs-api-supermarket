import { BadFormatRegistryError } from '@/common/error/bad-format-registry.error';
import { DuplicateKeyValueError } from '@/common/error/duplicate-key-value.error';
import { SuppliersService } from '@/suppliers/service/suppliers.service';
import { Injectable } from '@nestjs/common';
import { cnpj, cpf } from 'cpf-cnpj-validator';
import { CreateSupplierDto } from '../dto/create-supplier.dto';

@Injectable()
export class CreateSupplierUseCase {
  constructor(private suppliersService: SuppliersService) {}

  async execute(supplierData: CreateSupplierDto) {
    const registryIsValid =
      cpf.isValid(supplierData.registry) || cnpj.isValid(supplierData.registry);
    if (!registryIsValid) throw new BadFormatRegistryError();

    const registryExists = await this.suppliersService.findByRegistry(
      supplierData.registry,
    );
    if (!!registryExists) throw new DuplicateKeyValueError('registry');

    return await this.suppliersService.create(supplierData);
  }
}
