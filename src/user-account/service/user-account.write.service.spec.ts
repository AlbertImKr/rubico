import { Test, TestingModule } from '@nestjs/testing';
import { UserAccountWriteService } from './user-account.write.service';
import { Repository } from 'typeorm';
import { UserAccount } from '../entities/user-account.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import {
  TestUtils,
  MockDataSourceProvider,
  mockQueryRunner,
  mockEntityManager,
} from '../../shared/test-utils/test.utils';
import { EditUserInfoData } from '../dto/user-account.data.dto';
import { EXCEPTION_MESSAGES } from '../../shared/exception/exception-messages.constants';

describe('유저 계정 서비스', () => {
  let userAccountService: UserAccountWriteService;
  let userAccountRepository: Repository<UserAccount>;
  const userAccountRepositoryToken = getRepositoryToken(UserAccount);
  let userAccount: UserAccount;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserAccountWriteService,
        {
          provide: userAccountRepositoryToken,
          useValue: {
            findOneBy: jest.fn(),
            save: jest.fn(),
            create: jest.fn(),
            existsBy: jest.fn(),
          },
        },
        MockDataSourceProvider,
      ],
    }).compile();
    userAccountService = module.get<UserAccountWriteService>(
      UserAccountWriteService,
    );
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
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('새 유저 계정이 성공적으로 생성해야 한다', async () => {
      // given
      jest.spyOn(userAccountRepository, 'existsBy').mockResolvedValue(false);
      jest.spyOn(userAccountRepository, 'save').mockResolvedValue(userAccount);
      jest.spyOn(userAccountRepository, 'create').mockReturnValue(userAccount);
      const data = TestUtils.generateUserAccountData();

      // when
      const result = await userAccountService.generate(data);

      // then
      expect(userAccountRepository.create).toHaveBeenCalledWith(
        expect.objectContaining({
          nickname: TestUtils.nickname,
          email: TestUtils.email,
          address: TestUtils.address,
          phoneNumber: TestUtils.phoneNumber,
          hashedPassword: TestUtils.hashedPassword,
        }),
      );
      expect(userAccountRepository.save).toHaveBeenCalled();
      expect(result).toEqual(userAccount);
    });

    it('이미 존재하는 이메일로 유저 계정을 생성하면 에러가 발생해야 한다', async () => {
      // given
      jest.spyOn(userAccountRepository, 'existsBy').mockResolvedValue(true);

      // when
      const result = userAccountService.generate({ ...userAccount });

      // then
      await expect(result).rejects.toThrow(
        EXCEPTION_MESSAGES.EMAIL_IS_ALREADY_EXISTS,
      );
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
        deleted: false,
      });
      expect(result).toEqual(userAccount);
    });

    it('유저 계정을 찾지 못하면 에러가 발생해야 한다', async () => {
      // given
      jest.spyOn(userAccountRepository, 'findOneBy').mockResolvedValue(null);

      // when
      const result = userAccountService.findByEmail(userAccount.email);

      // then
      await expect(result).rejects.toThrow(
        EXCEPTION_MESSAGES.USER_IS_NOT_FOUND,
      );
    });
  });

  describe('유저 계정 정보 수정', () => {
    it('자기 소개가 있을 때 자기 소개 포함하여 유저 계정 정보를 수정해야 한다', async () => {
      // given
      jest
        .spyOn(userAccountService, 'findByIdWithQueryRunner')
        .mockResolvedValue(userAccount);
      jest
        .spyOn(userAccountService, 'saveWithQueryRunner')
        .mockResolvedValue(userAccount);
      const data: EditUserInfoData = {
        userId: TestUtils.id,
        nickname: TestUtils.editUserNickname,
        address: TestUtils.editUserAddress,
        introduction: TestUtils.editUserIntroduction,
      };

      // when
      const result = await userAccountService.updateInfo(data);

      // then
      expect(userAccountService.findByIdWithQueryRunner).toHaveBeenCalledWith(
        userAccount.id,
        mockQueryRunner,
      );
      expect(userAccountService.saveWithQueryRunner).toHaveBeenCalledWith(
        expect.objectContaining({
          nickname: data.nickname,
          address: data.address,
          introduction: data.introduction,
        }),
        mockQueryRunner,
      );
      expect(result).toEqual({
        nickname: data.nickname.value,
        address: data.address.value,
        introduction: data.introduction.value,
      });
    });

    it('자기 소개가 없을 때 자기 소개를 제외하고 유저 계정 정보를 수정해야 한다', async () => {
      // given
      jest
        .spyOn(userAccountService, 'findByIdWithQueryRunner')
        .mockResolvedValue(userAccount);
      jest
        .spyOn(userAccountService, 'saveWithQueryRunner')
        .mockResolvedValue(userAccount);
      const data: EditUserInfoData = {
        userId: TestUtils.id,
        nickname: TestUtils.editUserNickname,
        address: TestUtils.editUserAddress,
      };

      // when
      const result = await userAccountService.updateInfo(data);

      // then
      expect(userAccountService.findByIdWithQueryRunner).toHaveBeenCalledWith(
        userAccount.id,
        mockQueryRunner,
      );
      expect(userAccountService.saveWithQueryRunner).toHaveBeenCalledWith(
        expect.objectContaining({
          nickname: data.nickname,
          address: data.address,
        }),
        mockQueryRunner,
      );
      expect(result).toEqual({
        nickname: data.nickname.value,
        address: data.address.value,
        introduction: userAccount.introduction.value,
      });
    });
  });

  describe('이메일이 존재하는지 확인', () => {
    it('이메일이 존재하면 true를 반환해야 한다', async () => {
      // given
      jest.spyOn(userAccountRepository, 'existsBy').mockResolvedValue(true);

      // when
      const result = await userAccountService.isExistsEmail(userAccount.email);

      // then
      expect(userAccountRepository.existsBy).toHaveBeenCalledWith({
        email: userAccount.email,
      });
      expect(result).toBe(true);
    });

    it('이메일이 존재하지 않으면 false를 반환해야 한다', async () => {
      // given
      jest.spyOn(userAccountRepository, 'existsBy').mockResolvedValue(false);

      // when
      const result = await userAccountService.isExistsEmail(userAccount.email);

      // then
      expect(userAccountRepository.existsBy).toHaveBeenCalledWith({
        email: userAccount.email,
      });
      expect(result).toBe(false);
    });
  });

  describe('비밀번호 수정', () => {
    it('비밀번호가 일치하면 비밀번호를 수정해야 한다', async () => {
      // given
      jest
        .spyOn(userAccountService, 'findByIdWithQueryRunner')
        .mockResolvedValue(userAccount);
      jest
        .spyOn(userAccountService, 'saveWithQueryRunner')
        .mockResolvedValue(userAccount);

      // when
      await userAccountService.updatePassword({
        userId: TestUtils.id,
        password: TestUtils.password,
        newPassword: TestUtils.password,
      });

      // then
      expect(userAccountService.findByIdWithQueryRunner).toHaveBeenCalledWith(
        userAccount.id,
        mockQueryRunner,
      );
      expect(userAccountService.saveWithQueryRunner).toHaveBeenCalled();
    });

    it('비밀번호가 일치하지 않으면 에러가 발생해야 한다', async () => {
      // given
      jest
        .spyOn(userAccountService, 'findByIdWithQueryRunner')
        .mockResolvedValue(userAccount);
      jest
        .spyOn(userAccountService, 'saveWithQueryRunner')
        .mockResolvedValue(userAccount);

      // when
      const result = userAccountService.updatePassword({
        userId: TestUtils.id,
        password: TestUtils.differentPassword,
        newPassword: TestUtils.password,
      });

      // then
      await expect(result).rejects.toThrow(
        EXCEPTION_MESSAGES.PASSWORD_IS_NOT_MATCH,
      );
    });
  });

  describe('유저 계정 저장', () => {
    it('유저 계정을 저장해야 한다', async () => {
      // given
      jest.spyOn(mockEntityManager, 'save').mockResolvedValue(userAccount);

      // when
      const result = await userAccountService.saveWithQueryRunner(
        userAccount,
        mockQueryRunner,
      );

      // then
      expect(mockEntityManager.save).toHaveBeenCalledWith(
        UserAccount,
        userAccount,
      );
      expect(result).toEqual(userAccount);
    });
  });

  describe('유저 계정 아이디로 유저 계정 찾기', () => {
    it('유저 계정 아이디로 유저 계정을 찾아야 한다', async () => {
      // given
      jest.spyOn(mockEntityManager, 'findOneBy').mockResolvedValue(userAccount);

      // when
      const result = await userAccountService.findByIdWithQueryRunner(
        userAccount.id,
        mockQueryRunner,
      );

      // then
      expect(mockEntityManager.findOneBy).toHaveBeenCalledWith(UserAccount, {
        deleted: false,
        id: userAccount.id,
      });
      expect(result).toEqual(userAccount);
    });

    it('유저 계정을 찾지 못하면 에러가 발생해야 한다', async () => {
      // given
      jest.spyOn(mockEntityManager, 'findOneBy').mockResolvedValue(null);

      // when
      const result = userAccountService.findByIdWithQueryRunner(
        userAccount.id,
        mockQueryRunner,
      );

      // then
      await expect(result).rejects.toThrow(
        EXCEPTION_MESSAGES.USER_IS_NOT_FOUND,
      );
    });
  });

  describe('유저 계정 삭제', () => {
    it('유저 계정을 삭제해야 한다', async () => {
      // given
      jest
        .spyOn(userAccountService, 'findByIdWithQueryRunner')
        .mockResolvedValue(userAccount);
      jest
        .spyOn(userAccountService, 'saveWithQueryRunner')
        .mockResolvedValue(userAccount);

      // when
      await userAccountService.softDelete(userAccount.id, mockQueryRunner);

      // then
      expect(userAccountService.findByIdWithQueryRunner).toHaveBeenCalledWith(
        userAccount.id,
        mockQueryRunner,
      );
      expect(userAccountService.saveWithQueryRunner).toHaveBeenCalled();
    });
  });
});
