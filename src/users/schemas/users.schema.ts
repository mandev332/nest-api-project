import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  id: string;

  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  middlename: string;

  @Prop()
  birhtdate: string;

  @Prop()
  imageurl: string;

  @Prop({ required: true })
  phone: string;

  @Prop()
  position: string;

  @Prop()
  address: string;

  @Prop({ required: true })
  login: string;

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
