import { BadFormatRegistryError } from '@/common/error/bad-format-registry.error';
import { DuplicateKeyValueError } from '@/common/error/duplicate-key-value.error';
import { CreateSupplierDto } from '../dto/create-supplier.dto';

const supplierMock: CreateSupplierDto = {
  name: 'name test',
  companyName: 'companyName test',
  registry: '814.850.565-94',
};

export const createSupplierTest = () => {
  // TEST: "registry" should not be valid, should throw "BadFormatRegistryError()"
  //       "resgistry" duplicate, should throw "DuplicateKeyValueError()"
  it('should validate business rules', validateBusinessRules);

  // TEST: should create supplier, no errors
  it('should create supplier', createSupplier);
};

const validateBusinessRules = async () => {
  expect.assertions(2);

  try {
    const registryWRONG: CreateSupplierDto = {
      ...supplierMock,
      registry: 'registryWrong',
    };

    await global.__CONTROLLER__.create(registryWRONG);
  } catch (error) {
    expect(error).toStrictEqual(new BadFormatRegistryError());
  }

  try {
    const allSuppliers = await global.__CONTROLLER__.findAll();

    const registryWRONG: CreateSupplierDto = {
      ...supplierMock,
      registry: allSuppliers[0].registry,
    };

    await global.__CONTROLLER__.create(registryWRONG);
  } catch (error) {
    expect(error).toStrictEqual(new DuplicateKeyValueError('registry'));
  }
};

const createSupplier = async () => {
  const newSupplier = await global.__CONTROLLER__.create(supplierMock);
  expect(!!newSupplier).toBe(true);
};
