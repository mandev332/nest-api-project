import { UUID } from 'crypto';

export class Shopping {
  id: UUID;
  shop_name: string;
  address: string;
  shop_image_url: string;
  contact: string;
  location: string;
  type_id: UUID;
  long: string;
  lat: string;
}
