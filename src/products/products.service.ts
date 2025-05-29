import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/products.chema';
import { Model } from 'mongoose';
import { UUID } from 'crypto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}
  create(createProductDto: CreateProductDto) {
    const createProduct = new this.productModel(createProductDto);
    return createProduct.save();
  }

  findAll() {
    return this.productModel.find().exec();
  }

  findOne(id: UUID) {
    return this.productModel.findOne({ _id: id });
  }

  update(id: UUID, updateProductDto: UpdateProductDto) {
    return this.productModel.updateOne({
      _id: id,
      $set: {
        name: updateProductDto.name,
        price: updateProductDto.price,
        color: updateProductDto.color,
        count: updateProductDto.count,
        imageurl: updateProductDto.imageurl,
        type_id: updateProductDto.type_id,
      },
    });
  }

  remove(id: UUID) {
    return this.productModel.deleteOne({ _id: id });
  }
}
