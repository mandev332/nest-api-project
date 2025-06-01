import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { Type } from './entities/type.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UUID } from 'crypto';

@Injectable()
export class FileSizeValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // "value" is an object containing the file's attributes and metadata
    const oneKb = 1000;
    return value.size < oneKb;
  }
}

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
        type_name: updateTypeDto.type_name,
        type_image_url: updateTypeDto.type_image_url,
      },
    });
  }

  remove(id: UUID) {
    return this.typeModel.deleteOne({ _id: id });
  }
}
