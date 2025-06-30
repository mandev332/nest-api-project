import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Request,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UUID } from 'crypto';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from 'src/auth/auth.guards';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiSecurity,
} from '@nestjs/swagger';
import { User, UserResponse } from './entities/user.entity';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@ApiSecurity('basic')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'User avatar' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
          description: 'The file to upload',
        },
      },
    },
  })
  @ApiCreatedResponse({
    description: 'Avatar uploud',
    example: { success: 'boolean', filePath: 'string' },
  })
  @ApiBadRequestResponse({ description: 'Bad request 400' })
  @Post('avatar')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new MaxFileSizeValidator({ maxSize: 500000 })],
      }),
    )
    file: Express.Multer.File,
  ): { success: boolean; filePath: string } {
    return {
      success: true,
      filePath: `${file.destination}/${file.originalname}`,
    };
  }

  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'User create' })
  @ApiCreatedResponse({
    description: 'User created',
    type: [UserResponse],
  })
  @Post()
  create(@Request() req, @Body() createUserDto: CreateUserDto) {
    // console.log(req.user.role);
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({ summary: 'All users' })
  @ApiResponse({
    status: 200,
    description: 'Users',
    type: [UserResponse],
  })
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: 'User by id' })
  @ApiResponse({
    status: 200,
    description: 'User',
    type: UserResponse,
  })
  @Get(':id')
  findOne(@Param('id') id: UUID) {
    return this.usersService.findOne(id, '');
  }
  @ApiBody({ type: User })
  @ApiOperation({ summary: 'User update' })
  @ApiResponse({
    status: 200,
    description: 'User updated',
    type: UserResponse,
  })
  @Patch(':id')
  update(@Param('id') id: UUID, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @ApiOperation({ summary: 'User delete' })
  @Delete(':id')
  remove(@Param('id') id: UUID) {
    return this.usersService.remove(id);
  }
}
