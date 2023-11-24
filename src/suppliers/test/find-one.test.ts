export const findOneSupplierTest = () => {
  // TEST: should find first supplier, no erros
  it('should find first supplier', findFirstSupplier);
};

const findFirstSupplier = async () => {
  const suppliers = await global.__CONTROLLER__.findAll();
  const firstSupplier = suppliers[0];

  const supplier = await global.__CONTROLLER__.findOne(firstSupplier.id);
  expect(supplier.id === firstSupplier.id).toBe(true);
};
