import { BadFormatError } from '@/common/error/bad-format.error';
import { ForeignKeySupplierError } from '@/common/error/foreign-key-supplier-error';
import { NotFoundSupplierError } from '@/common/error/not-found-supplier.error';

export const removeSupplierTest = () => {
  // TEST: "id" in wrong format, should throw "BadFormatError()"
  it('should validate fields', validateFields);

  // TEST: "id" should not exist, should throw "NotFoundSupplierError()",
  //       Supplier should have foreign keys, should throw "ForeignKeySupplierError()"
  it('should validate business rules', validateBusinessRules);

  // TEST: should remove last supplier, no erros
  it('should remove last supplier', removeLastSupplier);
};

const validateFields = async () => {
  try {
    expect.assertions(1);

    const id_WRONG = 'a';
    await global.__CONTROLLER__.remove(id_WRONG);
  } catch (error) {
    expect(error).toStrictEqual(new BadFormatError('id'));
  }
};

const validateBusinessRules = async () => {
  expect.assertions(2);

  try {
    const id = '99999';
    await global.__CONTROLLER__.remove(id);
  } catch (error) {
    expect(error).toStrictEqual(new NotFoundSupplierError());
  }

  try {
    await global.__CONTROLLER__.remove(1);
  } catch (error) {
    expect(error).toStrictEqual(new ForeignKeySupplierError());
  }
};

const removeLastSupplier = async () => {
  const suppliers = await global.__CONTROLLER__.findAll();
  const lastSupplier = suppliers[suppliers.length - 1];

  await global.__CONTROLLER__.remove(lastSupplier.id);
};
