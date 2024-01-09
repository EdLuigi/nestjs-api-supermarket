export class Product {
  id?: number;
  supplierId: number;
  name: string;
  description?: string;
  stock: number;
  price: number;
  discountPercentage?: number;
  createdAt: Date;
}
