import { PartialType } from '@nestjs/mapped-types';
import { CreateSupCatigoryDto } from './create-sup-catigory.dto';

export class UpdateSupCatigoryDto extends PartialType(CreateSupCatigoryDto) {}
