import { Module } from '@nestjs/common';
import { ShoppingService } from './shopping.service';
import { ShoppingController } from './shopping.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Shopping } from './entities/shopping.entity';
import { ShoppingSchema } from './schemas/shoppings.chema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Shopping.name, schema: ShoppingSchema },
    ]),
  ],
  controllers: [ShoppingController],
  providers: [ShoppingService],
})
export class ShoppingModule {}
