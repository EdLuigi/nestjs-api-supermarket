import { DuplicateKeyValueError } from '@/common/error/duplicate-key-value.error';
import { CreateSupplierDto } from '../dto/create-supplier.dto';

export const createSupplierTest = () => {
  // TEST: "resgistry" duplicate, should throw "DuplicateKeyValueError()"
  it('should validate business rules', validateBusinessRules);

  // TEST: should create supplier, no errors
  it('should create supplier', createSupplier);
};

const validateBusinessRules = async () => {
  try {
    expect.assertions(1);
    const allSuppliers = await global.__CONTROLLER__.findAll();

    const supplierMock: CreateSupplierDto = {
      name: 'name test',
      companyName: 'companyName test',
      registry: allSuppliers[0].registry,
    };

    await global.__CONTROLLER__.create(supplierMock);
  } catch (error) {
    expect(error).toStrictEqual(new DuplicateKeyValueError('registry'));
  }
};

const createSupplier = async () => {
  const supplierMock: CreateSupplierDto = {
    name: 'name test',
    companyName: 'companyName test',
    registry: 'registry test',
  };

  const newSupplier = await global.__CONTROLLER__.create(supplierMock);
  expect(!!newSupplier).toBe(true);
};
