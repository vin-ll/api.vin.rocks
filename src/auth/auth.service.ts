import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { verify } from 'argon2';
import { jwtConstants } from './auth.constants';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findUser(username);
    if (!(await verify(user?.password, password))) {
      throw new UnauthorizedException(
        'Incorrect username or password provided',
      );
    }

    const payload = {
      role: user.role,
      username: user.username,
      sub: user.id,
    };
    console.log(jwtConstants);
    return {
      access_token: await this.jwtService.signAsync(payload, jwtConstants),
    };
  }
}
