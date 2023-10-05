import { Product } from '@/products/entities/product.entity';

export const productsSeeds: Product[] = [
  {
    supplierId: 2,
    name: 'Almôndegas de Carne com molho 500g',
    description: '',
    stock: 30,
    price: 25,
    discount: 0,
    createdAt: new Date(),
  },
  {
    supplierId: 3,
    name: 'Panettone Alpino Chocolate 500g',
    description: '',
    stock: 100,
    price: 35.99,
    discount: 0,
    createdAt: new Date(),
  },
  {
    supplierId: 1,
    name: 'Pernil sem Osso Temperado com Limão e Ervas',
    description:
      'Corte suíno selecionado, já temperado com ervas finas e limão e embalado no saco assa fácil, o produto vai direto do freezer para o forno. Não é necessário descongelar nem retemperar, não suja o forno.',
    stock: 50,
    price: 50,
    discount: 25,
    createdAt: new Date(),
  },
];
