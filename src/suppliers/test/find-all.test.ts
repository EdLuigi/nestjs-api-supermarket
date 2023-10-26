export const findAllSuppliersTest = () => {
  // TEST: should find all suppliers, no erros
  it('should find all suppliers', findAllSuppliers);
};

const findAllSuppliers = async () => {
  const suppliers = await global.__CONTROLLER__.findAll();
  expect(!!suppliers).toBe(true);
};
