import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UUID } from 'crypto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  create(createUserDto: CreateUserDto) {
    const createUser = new this.userModel(createUserDto);
    return createUser.save();
  }

  findAll() {
    return this.userModel.find().exec();
  }

  findOne(id: UUID, login: string) {
    if (login) return this.userModel.findOne({ login });
    return this.userModel.findOne({ _id: id });
  }

  update(id: UUID, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({
      _id: id,
      $set: {
        firstname: updateUserDto.firstname,
        lastname: updateUserDto.lastname,
        middlename: updateUserDto.middlename,
        birthdate: updateUserDto.birthdate,
        address: updateUserDto.address,
        imageurl: updateUserDto.imageurl,
        position: updateUserDto.position,
        phone: updateUserDto.phone,
        login: updateUserDto.login,
        password: updateUserDto.password,
      },
    });
  }

  remove(id: UUID) {
    return this.userModel.deleteOne({ _id: id });
  }
}
