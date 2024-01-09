export class User {
  id?: number;
  name?: string;
  email: string;
  registry: string;
  password: string;
  verified: boolean;
  createdAt: Date;
  updatedAt?: Date;
}
