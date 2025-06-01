import { Module } from '@nestjs/common';
import { ShoppingService } from './shopping.service';
import { ShoppingController } from './shopping.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Shopping } from './entities/shopping.entity';
import { ShoppingSchema } from './schemas/shoppings.chema';
import { diskStorage } from 'multer';
import { MulterModule } from '@nestjs/platform-express';

const fileStorage = diskStorage({
  destination: './images/shopping',
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
      { name: Shopping.name, schema: ShoppingSchema },
    ]),
  ],
  controllers: [ShoppingController],
  providers: [ShoppingService],
})
export class ShoppingModule {}
