import { ApiProperty } from '@nestjs/swagger';
import { randomUUID, UUID } from 'crypto';

export class User {
  @ApiProperty({ description: 'UUID', example: randomUUID() })
  id?: UUID;
  @ApiProperty({ description: 'firstname', example: 'Murodjon' })
  firstname: string;
  @ApiProperty({ description: 'lastname', example: 'Ochilov' })
  lastname: string;
  @ApiProperty({ description: 'middlename', example: "Karimboy o'g'li" })
  middlename: string;
  @ApiProperty({ description: 'birthdate' })
  birthdate: Date;
  @ApiProperty({ description: 'imageurl', example: 'http://image.com' })
  imageurl: string;
  @ApiProperty({ description: 'phone', example: '+998912345678' })
  phone: string;
  @ApiProperty({ description: 'position', example: 'USER' })
  position: POSITION;
  @ApiProperty({ description: 'address', example: 'Tashkent' })
  address: string;
  @ApiProperty({ description: 'login', example: 'exemple' })
  login: string;
  @ApiProperty({ description: 'password', example: '*********' })
  password: string;
  @ApiProperty({ description: 'createat' })
  createat: Date;
}

export class UserResponse {
  @ApiProperty()
  id?: UUID;
  @ApiProperty()
  firstname: string;
  @ApiProperty()
  lastname: string;
  @ApiProperty()
  middlename: string;
  @ApiProperty()
  birthdate: Date;
  @ApiProperty()
  imageurl: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  position: POSITION;
  @ApiProperty()
  address: string;
  @ApiProperty()
  login: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  createat: Date;
}

type POSITION = 'USER' | 'ADMIN' | 'SUPERADMIN';
