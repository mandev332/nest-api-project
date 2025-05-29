import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UUID } from 'crypto';
import mongoose, { HydratedDocument } from 'mongoose';

export type TypeDocument = HydratedDocument<Type>;

@Schema()
export class Type {
  @Prop()
  id: UUID;

  @Prop({ required: true })
  name: string;

  @Prop()
  imageurl: string;
}

export const TypeSchema = SchemaFactory.createForClass(Type);
