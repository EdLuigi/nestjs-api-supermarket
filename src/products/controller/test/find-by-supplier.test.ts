import { BadFormatError } from '@/common/error/bad-format.error';
import { NotFoundSupplierError } from '@/common/error/not-found-supplier.error';

export const findBySupplierTest = () => {
  // TEST: "supplierId" in wrong format, should throw "BadFormatError()"
  it('should validate fields', validateFields);

  // TEST: "supplierId" should not exist, should throw "NotFoundSupplierError()"
  it('should validate business rules', validateBusinessRules);

  // TEST: should find product(s) by "supplierId", no errors
  it('should find by supplier', findBySupplier);
};

const validateFields = async () => {
  try {
    expect.assertions(1);

    const supplierId = 'a';
    await global.__CONTROLLER__.findBySupplier(+supplierId);
  } catch (error) {
    expect(error).toStrictEqual(new BadFormatError('supplierId'));
  }
};

const validateBusinessRules = async () => {
  try {
    expect.assertions(1);

    const supplierId = '99999';
    const products = await global.__CONTROLLER__.findBySupplier(+supplierId);
    expect(!!products).toBe(true);
  } catch (error) {
    expect(error).toStrictEqual(new NotFoundSupplierError());
  }
};

const findBySupplier = async () => {
  const supplierId = '1';
  const products = await global.__CONTROLLER__.findBySupplier(+supplierId);
  expect(!!products).toBe(true);
};
