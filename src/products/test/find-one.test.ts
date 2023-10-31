import { BadFormatError } from '@/common/error/bad-format.error';

export const findOneProductTest = () => {
  // TEST: "id" in wrong format, should throw "BadFormatError()"
  it('should validate fields', validateFields);

  // TEST: should find first product, no erros
  it('should find first product', findFirstProduct);
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

const findFirstProduct = async () => {
  const products = await global.__CONTROLLER__.findAll();
  const firstProduct = products[0];

  const product = await global.__CONTROLLER__.findOne(firstProduct.id);
  expect(!!product).toBe(true);
};
