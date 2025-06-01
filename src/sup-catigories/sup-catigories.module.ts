import { Module } from '@nestjs/common';
import { SupCatigoriesService } from './sup-catigories.service';
import { SupCatigoriesController } from './sup-catigories.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SupCategory } from './entities/sup-category.entity';
import { SupCategorySchema } from './schemas/sup-categoris.chema';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

const fileStorage = diskStorage({
  destination: './images/sup-categories',
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
      { name: SupCategory.name, schema: SupCategorySchema },
    ]),
  ],
  controllers: [SupCatigoriesController],
  providers: [SupCatigoriesService],
})
export class SupCatigoriesModule {}
