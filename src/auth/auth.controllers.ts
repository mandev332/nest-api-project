import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guards';
import { log } from 'console';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiProperty,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { Auth } from './entities/auth.entity';
import { UserResponse } from 'src/users/entities/user.entity';

@ApiTags('Authentication')
@Controller('auth')
export class AuthenticationController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @ApiBody({ description: 'Login for token', type: Auth })
  @ApiOkResponse({
    example: {
      token: 'string',
    },
  })
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    log(signInDto);
    return this.authService.signIn(signInDto.login, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @ApiSecurity('basic')
  @ApiBearerAuth()
  @ApiProperty({ description: 'Profile' })
  @ApiOkResponse({
    example: {
      login: 'string',
      pass: 'string',
      role: 'string',
      iat: 'number',
      exp: 'number',
    },
  })
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
