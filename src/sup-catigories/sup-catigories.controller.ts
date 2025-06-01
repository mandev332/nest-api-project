import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
} from '@nestjs/common';
import { SupCatigoriesService } from './sup-catigories.service';
import { CreateSupCatigoryDto } from './dto/create-sup-catigory.dto';
import { UpdateSupCatigoryDto } from './dto/update-sup-catigory.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('sup-catigories')
export class SupCatigoriesController {
  constructor(private readonly supCatigoriesService: SupCatigoriesService) {}

  @Post('image')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new MaxFileSizeValidator({ maxSize: 500000 })],
      }),
    )
    file: Express.Multer.File,
  ) {
    return {
      success: true,
      filePath: `${file.destination}/${file.originalname}`,
    };
  }

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
  update(
    @Param('id') id: string,
    @Body() updateSupCatigoryDto: UpdateSupCatigoryDto,
  ) {
    return this.supCatigoriesService.update(+id, updateSupCatigoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.supCatigoriesService.remove(+id);
  }
}
