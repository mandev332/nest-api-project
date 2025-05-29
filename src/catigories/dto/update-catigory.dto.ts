import { PartialType } from '@nestjs/mapped-types';
import { CreateCatigoryDto } from './create-catigory.dto';

export class UpdateCatigoryDto extends PartialType(CreateCatigoryDto) {}
