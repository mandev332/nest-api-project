import { Injectable } from '@nestjs/common';
import { CreateCatigoryDto } from './dto/create-catigory.dto';
import { UpdateCatigoryDto } from './dto/update-catigory.dto';

@Injectable()
export class CatigoriesService {
  create(createCatigoryDto: CreateCatigoryDto) {
    return 'This action adds a new catigory';
  }

  findAll() {
    return `This action returns all catigories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} catigory`;
  }

  update(id: number, updateCatigoryDto: UpdateCatigoryDto) {
    return `This action updates a #${id} catigory`;
  }

  remove(id: number) {
    return `This action removes a #${id} catigory`;
  }
}
