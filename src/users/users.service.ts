import { Injectable } from '@nestjs/common';
import { UserModel } from './users.model';

@Injectable()
export class UsersService {
  private readonly userData = [
    {
      id: 1,
      username: 'vin',
      password:
        '$argon2id$v=19$m=65536,t=3,p=4$83Lrd93MOkj4qhiKcODzYw$3rJgeQfPSL0jpbpkw3+lzxTHhh7PnMDFaYGUhMDVSgQ',
      role: 1,
    },
    {
      id: 1,
      username: 'vin2',
      password:
        '$argon2id$v=19$m=65536,t=3,p=4$83Lrd93MOkj4qhiKcODzYw$3rJgeQfPSL0jpbpkw3+lzxTHhh7PnMDFaYGUhMDVSgQ',
      role: 2,
    },
  ];

  async findUser(username: string): Promise<UserModel | undefined> {
    return this.userData.find((user) => user.username === username);
  }
}
