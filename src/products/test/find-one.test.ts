export const findOneProductTest = () => {
  // TEST: should find first product, no erros
  it('should find first product', findFirstProduct);
};

const findFirstProduct = async () => {
  const products = await global.__CONTROLLER__.findAll();
  const firstProduct = products[0];

  const product = await global.__CONTROLLER__.findOne(firstProduct.id);
  expect(!!product).toBe(true);
};
