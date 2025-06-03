import { Module } from '@nestjs/common';
import { TypesService } from './types.service';
import { TypesController } from './types.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeSchema } from './schemas/types.chema';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

const fileStorage = diskStorage({
  destination: './images/types',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Type', schema: TypeSchema }]),
    MulterModule.register({
      storage: fileStorage,
    }),
  ],
  controllers: [TypesController],
  providers: [TypesService],
})
export class TypesModule {}
