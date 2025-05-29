import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UUID } from 'crypto';
import mongoose, { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  id: UUID;

  @Prop({ required: true })
  name: string;

  @Prop()
  imageurl: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  color: string;

  @Prop()
  count: number;

  @Prop()
  savedeadline: string;

  @Prop({
    type: { type: mongoose.Schema.Types.ObjectId, ref: 'Type' },
  })
  type_id: UUID;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
