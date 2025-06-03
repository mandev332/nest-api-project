import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(login: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(
      '831b1af5-ac3b-4c2f-b9fa-68b9173ada27',
      login,
    );
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = {
      login: user.login,
      pass: user.password,
      role: user.position,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
