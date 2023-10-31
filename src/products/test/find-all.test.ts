export const findAllProductsTest = () => {
  // TEST: should find all products, no erros
  it('should find all products', findAllProducts);
};

const findAllProducts = async () => {
  const products = await global.__CONTROLLER__.findAll();
  expect(!!products).toBe(true);
};
