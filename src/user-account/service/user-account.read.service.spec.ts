import { Test, TestingModule } from '@nestjs/testing';
import { UserAccountReadService } from './user-account.read.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserAccount } from '../entities/user-account.entity';
import { Repository } from 'typeorm';
import { TestUtils } from '../../shared/test-utils/test.utils';
import { EXCEPTION_MESSAGES } from '../../shared/exception/exception-messages.constants';

describe('user-account read 서비스', () => {
  let userAccountService: UserAccountReadService;
  let userAccountRepository: Repository<UserAccount>;
  const userAccountRepositoryToken = getRepositoryToken(UserAccount);
  let userAccount: UserAccount;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserAccountReadService,
        {
          provide: userAccountRepositoryToken,
          useValue: {
            findOneBy: jest.fn(),
            save: jest.fn(),
            create: jest.fn(),
            existsBy: jest.fn(),
          },
        },
      ],
    }).compile();
    userAccountService = module.get<UserAccountReadService>(
      UserAccountReadService,
    );
    userAccountRepository = module.get<Repository<UserAccount>>(
      userAccountRepositoryToken,
    );
    userAccount = TestUtils.userAccount;
  });

  describe('회원 정보 조회', () => {
    it('회원 정보 조회 성공', async () => {
      // given
      const id = userAccount.id;
      jest.spyOn(userAccountService, 'findById').mockResolvedValue(userAccount);

      // when
      const result = await userAccountService.getUserInfo(id);

      // then
      expect(result.nickname).toBe(userAccount.nickname.value);
      expect(result.address).toBe(userAccount.address.value);
      expect(result.introduction).toBe(userAccount.introduction?.value);
    });
  });

  describe('회원 아이디로 회원 계정 조회', () => {
    it('회원 아이디로 회원 계정 조회 성공', async () => {
      // given
      const id = userAccount.id;
      jest
        .spyOn(userAccountRepository, 'findOneBy')
        .mockResolvedValue(userAccount);

      // when
      const result = await userAccountService.findById(id);

      // then
      expect(result).toBe(userAccount);
    });

    it('회원 아이디로 회원 계정 조회 실패', async () => {
      // given
      const id = userAccount.id;
      jest
        .spyOn(userAccountRepository, 'findOneBy')
        .mockResolvedValue(undefined);

      // when
      const result = userAccountService.findById(id);

      // then
      await expect(result).rejects.toThrow(EXCEPTION_MESSAGES.USER_NOT_FOUND);
    });
  });
});
