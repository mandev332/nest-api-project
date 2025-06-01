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
import { CatigoriesService } from './catigories.service';
import { CreateCatigoryDto } from './dto/create-catigory.dto';
import { UpdateCatigoryDto } from './dto/update-catigory.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('catigories')
export class CatigoriesController {
  constructor(private readonly catigoriesService: CatigoriesService) {}

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
  create(@Body() createCatigoryDto: CreateCatigoryDto) {
    return this.catigoriesService.create(createCatigoryDto);
  }

  @Get()
  findAll() {
    return this.catigoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catigoriesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCatigoryDto: UpdateCatigoryDto,
  ) {
    return this.catigoriesService.update(+id, updateCatigoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catigoriesService.remove(+id);
  }
}
