import { UUID } from 'crypto';

export class Product {
  id: UUID;
  name: string;
  price: number;
  count: number;
  color: string;
  imageurl: string;
  savedeadline: string;
  type_id: UUID;
}
