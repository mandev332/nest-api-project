import { Module } from '@nestjs/common';
import { CatigoriesService } from './catigories.service';
import { CatigoriesController } from './catigories.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from './schemas/categories.chema';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

const fileStorage = diskStorage({
  destination: './images/categories',
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
      { name: Category.name, schema: CategorySchema },
    ]),
  ],
  controllers: [CatigoriesController],
  providers: [CatigoriesService],
})
export class CatigoriesModule {}
