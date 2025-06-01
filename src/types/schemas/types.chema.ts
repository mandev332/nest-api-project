import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UUID } from 'crypto';
import mongoose, { HydratedDocument } from 'mongoose';

export type TypeDocument = HydratedDocument<Type>;

@Schema()
export class Type {
  @Prop()
  id: UUID;

  @Prop({ required: true })
  type_name: string;

  @Prop()
  type_image_url: string;
}

export const TypeSchema = SchemaFactory.createForClass(Type);
