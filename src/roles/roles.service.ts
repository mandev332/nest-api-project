import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Role } from './entities/role.entity';
import { Model } from 'mongoose';
import { UUID } from 'crypto';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role.name) private roleModel: Model<Role>) {}
  create(createRoleDto: CreateRoleDto) {
    const createRoleModel = new this.roleModel(createRoleDto);
    return this.roleModel.find().exec();
  }

  findAll() {
    return this.roleModel.find().exec();
  }

  findOne(_id: UUID) {
    return this.roleModel.findOne({ _id });
  }

  update(_id: UUID, updateRoleDto: UpdateRoleDto) {
    return this.roleModel.updateOne({
      _id,
      $set: {
        get: updateRoleDto.get,
        del: updateRoleDto.del,
        put: updateRoleDto.put,
      },
    });
  }
  remove(_id: UUID) {
    return this.roleModel.deleteOne({ _id });
  }
}
