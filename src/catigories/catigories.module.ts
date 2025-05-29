import { Module } from '@nestjs/common';
import { CatigoriesService } from './catigories.service';
import { CatigoriesController } from './catigories.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from './schemas/categories.chema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
    ]),
  ],
  controllers: [CatigoriesController],
  providers: [CatigoriesService],
})
export class CatigoriesModule {}
