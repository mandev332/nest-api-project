import { Injectable } from '@nestjs/common';
import { CreateShoppingDto } from './dto/create-shopping.dto';
import { UpdateShoppingDto } from './dto/update-shopping.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Shopping } from './entities/shopping.entity';
import { Model } from 'mongoose';
import { UUID } from 'crypto';

@Injectable()
export class ShoppingService {
  constructor(
    @InjectModel(Shopping.name) private shoppingModel: Model<Shopping>,
  ) {}
  create(createShoppingDto: CreateShoppingDto) {
    const shopping = new this.shoppingModel(createShoppingDto);
    return shopping.save();
  }

  findAll() {
    return this.shoppingModel.find().exec();
  }

  findOne(_id: UUID) {
    return this.shoppingModel.findOne({ _id });
  }

  update(_id: UUID, updateShoppingDto: UpdateShoppingDto) {
    return this.shoppingModel
      .updateOne({
        _id,
        $set: {
          address: updateShoppingDto.address,
          contact: updateShoppingDto.contact,
          location: updateShoppingDto.location,
          shop_image_url: updateShoppingDto.shop_image_url,
          shop_name: updateShoppingDto.shop_name,
          long: updateShoppingDto.long,
          lat: updateShoppingDto.lat,
        },
      })
      .exec();
  }

  remove(_id: UUID) {
    return this.shoppingModel.deleteOne({ _id });
  }
}
