import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UUID } from 'crypto';
import mongoose, { HydratedDocument } from 'mongoose';

export type SupCategoryDocument = HydratedDocument<SupCategory>;

@Schema()
export class SupCategory {
  @Prop()
  id: UUID;

  @Prop({ required: true })
  sup_name: string;

  @Prop()
  sup_image_url: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }] })
  cat_id: UUID;
}

export const SupCategorySchema = SchemaFactory.createForClass(SupCategory);
