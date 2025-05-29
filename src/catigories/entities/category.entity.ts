import { UUID } from 'crypto';

export class Category {
  is: UUID;
  cat_name: string;
  cat_image_url: string;
  shop_id: UUID;
}
