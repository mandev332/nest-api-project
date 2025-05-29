import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UUID } from 'crypto';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}
  create(createOrderDto: CreateOrderDto) {
    const createOrder = new this.orderModel(createOrderDto);
    return createOrder.save();
  }

  findAll() {
    return this.orderModel.find().exec();
  }

  findOne(id: UUID) {
    return this.orderModel.findOne({ _id: id });
  }

  update(id: UUID, updateOrderDto: UpdateOrderDto) {
    return this.orderModel.updateOne({
      _id: id,
      $set: {
        paid: updateOrderDto.paid,
        products: updateOrderDto.products,
        user_id: updateOrderDto.user_id,
        total: updateOrderDto.total,
      },
    });
  }

  remove(id: UUID) {
    return this.orderModel.deleteOne({ _id: id });
  }
}
