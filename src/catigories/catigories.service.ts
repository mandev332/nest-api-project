import { Injectable } from '@nestjs/common';
import { CreateCatigoryDto } from './dto/create-catigory.dto';
import { UpdateCatigoryDto } from './dto/update-catigory.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './entities/category.entity';
import { Model } from 'mongoose';
import { UUID } from 'crypto';

@Injectable()
export class CatigoriesService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}
  create(createCatigoryDto: CreateCatigoryDto) {
    const createCategory = new this.categoryModel(createCatigoryDto);
    return createCategory.save();
  }

  findAll() {
    return this.categoryModel.find().exec();
  }

  findOne(_id: UUID) {
    return this.categoryModel.findOne({ _id });
  }

  update(_id: UUID, updateCatigoryDto: UpdateCatigoryDto) {
    return this.categoryModel.updateOne({
      _id,
      $set: {
        cat_name: updateCatigoryDto.name,
        cat_image_url: updateCatigoryDto.imageurl,
      },
    });
  }

  remove(_id: UUID) {
    return this.categoryModel.deleteOne({ _id });
  }
}
