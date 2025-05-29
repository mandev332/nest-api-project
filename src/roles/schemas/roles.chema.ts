import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UUID } from 'crypto';
import { HydratedDocument } from 'mongoose';

export type RoleDocument = HydratedDocument<Role>;

@Schema()
export class Role {
  @Prop()
  id: UUID;

  @Prop()
  role_type: string;

  @Prop()
  get: boolean;

  @Prop()
  set: boolean;

  @Prop()
  put: boolean;

  @Prop()
  del: boolean;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
