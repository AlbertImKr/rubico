import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../service/auth.service';
import { UserAccountWriteService } from '../../user-account/service/user-account.write.service';
import { TokenService } from '../service/token.service';
import { UserAccount } from '../../user-account/entities/user-account.entity';
import { Tokens } from '../dto/auth.response.dto';
import { SignInData, SignUpData } from '../dto/auth.data.dto';
import { TestConstants } from '../../shared/test-utils/test.constants';
import { TestUtils } from '../../shared/test-utils/test.utils';
import { PasswordHasher } from '../../shared/utils/password-hasher';
import { EXCEPTION_MESSAGES } from '../../shared/exception/exception-messages.constants';
import { UnauthorizedException } from '@nestjs/common';

describe('auth 서비스', () => {
  let authService: AuthService;
  let userAccountService: UserAccountWriteService;
  let tokenService: TokenService;
  let userAccount: UserAccount;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UserAccountWriteService,
          useValue: {
            findByEmail: jest.fn(),
            generate: jest.fn(),
          },
        },
        {
          provide: TokenService,
          useValue: {
            generateTokens: jest.fn(),
          },
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    userAccountService = module.get<UserAccountWriteService>(
      UserAccountWriteService,
    );
    tokenService = module.get<TokenService>(TokenService);
    userAccount = TestUtils.userAccount;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
    expect(tokenService).toBeDefined();
    expect(userAccountService).toBeDefined();
  });

  describe('회원가입 테스트', () => {
    it('회원 가입 성공', async () => {
      // given
      const data = createTestSignUpDto();
      const tokens = createTestTokens();
      jest.spyOn(userAccountService, 'generate').mockResolvedValue(userAccount);
      jest.spyOn(tokenService, 'generateTokens').mockResolvedValue(tokens);
      const hashedPassword = await PasswordHasher.hash(data.password);
      jest.spyOn(PasswordHasher, 'hash').mockResolvedValue(hashedPassword);

      // when
      await authService.signup(data);

      // then
      expect(userAccountService.generate).toHaveBeenCalledWith({
        ...data,
        hashedPassword: hashedPassword,
      });
      expect(tokenService.generateTokens).toHaveBeenCalledWith(userAccount);
    });
  });

  describe('로그인 테스트', () => {
    it('로그인 성공', async () => {
      // given
      const data = createTestSignInDto();
      const tokens = createTestTokens();
      jest
        .spyOn(userAccountService, 'findByEmail')
        .mockResolvedValue(userAccount);
      jest.spyOn(tokenService, 'generateTokens').mockResolvedValue(tokens);

      // when
      await authService.signIn(data);

      // then
      expect(userAccountService.findByEmail).toHaveBeenCalledWith(data.email);
      expect(tokenService.generateTokens).toHaveBeenCalledWith(userAccount);
    });

    it('로그인 실패: 비밀번호 불일치', async () => {
      // given
      const data = createTestSignInDto();
      jest
        .spyOn(userAccountService, 'findByEmail')
        .mockResolvedValue(userAccount);
      jest.spyOn(PasswordHasher, 'compare').mockResolvedValue(false);

      // when
      authService.signIn(data).catch((e) => {
        // then
        expect(e).toBeInstanceOf(UnauthorizedException);
        expect(e.message).toBe(EXCEPTION_MESSAGES.PASSWORD_IS_MISMATCH);
      });
    });
  });

  function createTestTokens(): Tokens {
    return {
      accessToken: TestConstants.ACCESS_TOKEN,
      refreshToken: TestConstants.REFRESH_TOKEN,
    };
  }

  function createTestSignInDto(): SignInData {
    return {
      email: TestUtils.email,
      password: TestUtils.password,
    };
  }

  function createTestSignUpDto(): SignUpData {
    return {
      nickname: TestUtils.nickname,
      email: TestUtils.email,
      address: TestUtils.address,
      phoneNumber: TestUtils.phoneNumber,
      password: TestUtils.password,
    };
  }
});
