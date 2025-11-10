import { Injectable } from '@nestjs/common';
import { CreateSupCatigoryDto } from './dto/create-sup-catigory.dto';
import { UpdateSupCatigoryDto } from './dto/update-sup-catigory.dto';
import { InjectModel } from '@nestjs/mongoose';
import { SupCategory } from './entities/sup-category.entity';
import { Model } from 'mongoose';
import { UUID } from 'crypto';

@Injectable()
export class SupCatigoriesService {
  constructor(
    @InjectModel(SupCategory.name)
    private supCategoryModel: Model<SupCategory>,
  ) {}
  create(createSupCatigoryDto: CreateSupCatigoryDto) {
    const createSupCategory = new this.supCategoryModel(createSupCatigoryDto);
    return createSupCategory.save();
  }

  findAll() {
    return this.supCategoryModel.find().exec();
  }
  findOne(_id: UUID) {
    return this.supCategoryModel.findOne({ _id });
  }

  update(_id: UUID, updateSupCatigoryDto: UpdateSupCatigoryDto) {
    return this.supCategoryModel.updateOne({
      _id,
      $set: {
        sup_name: updateSupCatigoryDto.sup_image_url,
        sup_image_url: updateSupCatigoryDto.sup_name,
      },
    });
  }

  remove(_id: UUID) {
    return this.supCategoryModel.deleteOne({ _id });
  }
}
