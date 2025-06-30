import { ApiProperty } from '@nestjs/swagger';

export class Auth {
  @ApiProperty({ description: 'Auth login', example: 'Asadov@gmail.com' })
  login: string;
  @ApiProperty({ description: 'Auth password', example: 'ASADOV' })
  password: string;
}
