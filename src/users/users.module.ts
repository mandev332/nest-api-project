import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './schemas/users.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from 'src/order/schemas/users.schema';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

const fileStorage = diskStorage({
  destination: './images/users',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

@Module({
  imports: [
    MulterModule.register({
      storage: fileStorage,
    }),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Order.name, schema: OrderSchema },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
