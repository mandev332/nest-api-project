import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UUID } from 'crypto';
import mongoose, { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop()
  id: UUID;

  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' } })
  products: string[];

  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } })
  user_id: string;

  @Prop()
  total: number;

  @Prop()
  paid: boolean;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
