import { Test, TestingModule } from '@nestjs/testing';
import { UserAccountService } from './user-account.service';
import { Repository } from 'typeorm';
import { UserAccount } from '../entities/user-account.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TestUtils } from '../../shared/test-utils/test.utils';

describe('유저 계정 서비스', () => {
  let userAccountService: UserAccountService;
  let userAccountRepository: Repository<UserAccount>;
  const userAccountRepositoryToken = getRepositoryToken(UserAccount);
  let userAccount: UserAccount;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserAccountService,
        {
          provide: userAccountRepositoryToken,
          useValue: {
            findOneBy: jest.fn(),
            save: jest.fn(),
            create: jest.fn(),
          },
        },
      ],
    }).compile();
    userAccountService = module.get<UserAccountService>(UserAccountService);
    userAccountRepository = module.get<Repository<UserAccount>>(
      userAccountRepositoryToken,
    );
    userAccount = TestUtils.userAccount;
  });

  it('should be defined', () => {
    expect(userAccountService).toBeDefined();
    expect(userAccountRepository).toBeDefined();
  });

  describe('유저 계정 생성', () => {
    it('새 유저 계정이 성공적으로 생성해야 한다', async () => {
      // given
      jest.spyOn(userAccountRepository, 'save').mockResolvedValue(userAccount);
      jest.spyOn(userAccountRepository, 'create').mockReturnValue(userAccount);

      // when
      const result = await userAccountService.generate({ ...userAccount });

      // then
      expect(userAccountRepository.create).toHaveBeenCalledWith(
        expect.objectContaining({
          nickname: userAccount.nickname,
          email: userAccount.email,
          address: userAccount.address,
          phoneNumber: userAccount.phoneNumber,
          password: userAccount.password,
        }),
      );
      expect(userAccountRepository.save).toHaveBeenCalled();
      expect(result).toEqual(userAccount);
    });
  });

  describe('이메일로 유저 계정 찾기', () => {
    it('이메일로 유저 계정을 찾아야 한다', async () => {
      // given
      jest
        .spyOn(userAccountRepository, 'findOneBy')
        .mockResolvedValue(userAccount);

      // when
      const result = await userAccountService.findByEmail(userAccount.email);

      // then
      expect(userAccountRepository.findOneBy).toHaveBeenCalledWith({
        email: userAccount.email,
      });
      expect(result).toEqual(userAccount);
    });
  });
});
