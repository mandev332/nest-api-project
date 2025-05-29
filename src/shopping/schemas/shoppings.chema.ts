import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UUID } from 'crypto';
import mongoose, { HydratedDocument } from 'mongoose';

export type ShoppingDocument = HydratedDocument<Shopping>;

@Schema()
export class Shopping {
  @Prop()
  id: UUID;

  @Prop({ required: true })
  name: string;

  @Prop()
  address: string;

  @Prop()
  shop_image_url: string;

  @Prop()
  contact: string;

  @Prop()
  location: string;

  @Prop({
    required: true,
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Type' }],
  })
  type_id: UUID;

  @Prop()
  long: string;

  @Prop()
  lat: string;
}

export const ShoppingSchema = SchemaFactory.createForClass(Shopping);
