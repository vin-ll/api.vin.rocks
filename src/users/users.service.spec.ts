import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  describe('findUser', () => {
    it('should return a user when given a valid username', async () => {
      const user = await service.findUser('vin');
      expect(user).toBeDefined();
      expect(user?.username).toEqual('vin');
    });

    it('should return undefined when given an invalid username', async () => {
      const user = await service.findUser('nonexistentuser');
      expect(user).toBeUndefined();
    });
  });
});
