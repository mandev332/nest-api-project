import { Module } from '@nestjs/common';
import { TypesService } from './types.service';
import { TypesController } from './types.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from 'src/order/schemas/users.schema';
import { TypeSchema } from './schemas/types.chema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Type', schema: TypeSchema }])],
  controllers: [TypesController],
  providers: [TypesService],
})
export class TypesModule {}
