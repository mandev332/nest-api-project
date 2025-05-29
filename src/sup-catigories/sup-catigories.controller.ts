import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SupCatigoriesService } from './sup-catigories.service';
import { CreateSupCatigoryDto } from './dto/create-sup-catigory.dto';
import { UpdateSupCatigoryDto } from './dto/update-sup-catigory.dto';

@Controller('sup-catigories')
export class SupCatigoriesController {
  constructor(private readonly supCatigoriesService: SupCatigoriesService) {}

  @Post()
  create(@Body() createSupCatigoryDto: CreateSupCatigoryDto) {
    return this.supCatigoriesService.create(createSupCatigoryDto);
  }

  @Get()
  findAll() {
    return this.supCatigoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.supCatigoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSupCatigoryDto: UpdateSupCatigoryDto) {
    return this.supCatigoriesService.update(+id, updateSupCatigoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.supCatigoriesService.remove(+id);
  }
}
