export class Product {
  id: number;
  supplierId: number;
  name: string;
  description?: string;
  stock: number;
  price: number;
  discount?: number;
  createdAt: Date;
}
