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
  MaxFileSizeValidator,
  FileTypeValidator,
  ParseFilePipe,
} from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { UUID } from 'crypto';
import { TypesService } from './types.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('types')
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

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
  create(@Body() createTypeDto: CreateTypeDto) {
    return this.typesService.create(createTypeDto);
  }

  @Get()
  findAll() {
    return this.typesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: UUID) {
    return this.typesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: UUID, @Body() updateTypeDto: UpdateTypeDto) {
    console.log(id, updateTypeDto);
    return this.typesService.update(id, updateTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: UUID) {
    return this.typesService.remove(id);
  }
}
