import { Injectable } from '@nestjs/common';
import { UserModel } from './users.model';

@Injectable()
export class UsersService {
  private readonly userData = [
    {
      id: 1,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      role: 1,
    },
  ];

  async findUser(username: string): Promise<UserModel | undefined> {
    return this.userData.find((user) => user.username === username);
  }
}
