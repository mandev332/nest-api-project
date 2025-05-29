import { Injectable } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { Type } from './entities/type.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UUID } from 'crypto';

@Injectable()
export class TypesService {
  constructor(@InjectModel(Type.name) private typeModel: Model<Type>) {}
  create(createTypeDto: CreateTypeDto) {
    const createType = new this.typeModel(createTypeDto);
    return createType.save();
  }

  findAll() {
    return this.typeModel.find().exec();
  }

  findOne(id: UUID) {
    return this.typeModel.findOne({ _id: id });
  }

  update(id: UUID, updateTypeDto: UpdateTypeDto) {
    return this.typeModel.updateOne({
      _id: id,
      $set: {
        name: updateTypeDto.name,
        imageurl: updateTypeDto.imageurl,
      },
    });
  }

  remove(id: UUID) {
    return this.typeModel.deleteOne({ _id: id });
  }
}
