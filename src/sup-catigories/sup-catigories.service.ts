import { Injectable } from '@nestjs/common';
import { CreateSupCatigoryDto } from './dto/create-sup-catigory.dto';
import { UpdateSupCatigoryDto } from './dto/update-sup-catigory.dto';

@Injectable()
export class SupCatigoriesService {
  create(createSupCatigoryDto: CreateSupCatigoryDto) {
    return 'This action adds a new supCatigory';
  }

  findAll() {
    return `This action returns all supCatigories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} supCatigory`;
  }

  update(id: number, updateSupCatigoryDto: UpdateSupCatigoryDto) {
    return `This action updates a #${id} supCatigory`;
  }

  remove(id: number) {
    return `This action removes a #${id} supCatigory`;
  }
}
