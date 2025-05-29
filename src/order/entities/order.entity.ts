import { UUID } from 'crypto';

export class Order {
  id: UUID;
  products: string[];
  user_id: string;
  total: number;
  paid: boolean;
}
