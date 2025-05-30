import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrderModule } from './order/order.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TypesModule } from './types/types.module';
import { UserSchema } from './users/schemas/users.schema';
import { CatigoriesModule } from './catigories/catigories.module';
import { SupCatigoriesModule } from './sup-catigories/sup-catigories.module';
import { ShoppingModule } from './shopping/shopping.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    OrderModule,
    MongooseModule.forFeature([{ name: 'Order', schema: UserSchema }]),
    MongooseModule.forRoot(
      'mongodb+srv://nodir:3WZNWBLrdU28gHSn@cluster0.rlpgj0d.mongodb.net/crm',
    ),
    TypesModule,
    CatigoriesModule,
    SupCatigoriesModule,
    ShoppingModule,
    RolesModule,
  ],
  controllers: [],
  providers: [],
  exports: [MongooseModule],
})
export class AppModule {}
