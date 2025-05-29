import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UUID } from 'crypto';
import mongoose, { HydratedDocument } from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;

@Schema()
export class Category {
  @Prop()
  id: UUID;

  @Prop({ required: true })
  name: string;

  @Prop()
  imageurl: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Shopping' }] })
  shop_id: UUID;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
