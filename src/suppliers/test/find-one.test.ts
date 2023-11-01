import { BadFormatError } from '@/common/error/bad-format.error';

export const findOneSupplierTest = () => {
  // TEST: "id" in wrong format, should throw "BadFormatError()"
  it('should validate fields', validateFields);

  // TEST: should find first supplier, no erros
  it('should find first supplier', findFirstSupplier);
};

const validateFields = async () => {
  try {
    expect.assertions(1);

    const id_WRONG = 'a';
    await global.__CONTROLLER__.findOne(id_WRONG);
  } catch (error) {
    expect(error).toStrictEqual(new BadFormatError('id'));
  }
};

const findFirstSupplier = async () => {
  const suppliers = await global.__CONTROLLER__.findAll();
  const firstSupplier = suppliers[0];

  const supplier = await global.__CONTROLLER__.findOne(firstSupplier.id);
  expect(supplier.id === firstSupplier.id).toBe(true);
};
