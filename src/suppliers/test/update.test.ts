import { NotFoundSupplierError } from '@/common/error/not-found-supplier.error';
import { UpdateSupplierDto } from '../dto/update-supplier.dto';

const supplierMock: UpdateSupplierDto = {
  name: 'name updated',
  companyName: 'companyName updated',
};

export const updateSupplierTest = () => {
  // TEST: "id" should not exist, should throw "NotFoundSupplierError()"
  it('should validate business rules', validateBusinessRules);

  // TEST: should update last supplier, no errors
  it('should update last supplier', updateLastSupplier);
};

const validateBusinessRules = async () => {
  try {
    expect.assertions(1);
    const id = '99999';
    await global.__CONTROLLER__.update(+id, supplierMock);
  } catch (error) {
    expect(error).toStrictEqual(new NotFoundSupplierError());
  }
};

const updateLastSupplier = async () => {
  const suppliers = await global.__CONTROLLER__.findAll();
  const lastSupplier = suppliers[suppliers.length - 1];

  const updatedSupplier = await global.__CONTROLLER__.update(
    lastSupplier.id,
    supplierMock,
  );
  expect(!!updatedSupplier).toBe(true);
};
