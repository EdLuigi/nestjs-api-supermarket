export class Product {
  id?: number;
  supplierId: number;
  name: string;
  description?: string;
  stock: number;
  price: number;
  discount_percentage?: number;
  createdAt: Date;
}
