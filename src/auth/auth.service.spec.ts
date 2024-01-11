import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserAccountService } from '../user-account/user-account.service';
import { TokenService } from './token.service';
import { UserAccount } from '../user-account/entities/user-account.entity';
import { Tokens } from './dto/auth.response.dto';
import { SignInDto, SignUpDto } from './dto/auth.request.dto';

describe('auth 서비스', () => {
  let authService: AuthService;
  let userAccountService: UserAccountService;
  let tokenService: TokenService;
  let userAccount: UserAccount;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UserAccountService,
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
    userAccountService = module.get<UserAccountService>(UserAccountService);
    tokenService = module.get<TokenService>(TokenService);
    userAccount = createTestUserAccount();
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
    expect(tokenService).toBeDefined();
    expect(userAccountService).toBeDefined();
  });

  describe('회원가입 테스트', () => {
    it('회원 가입 성공', async () => {
      // given
      const signUpDto = createTestSignUpDto();
      const tokens = createTestTokens();
      jest.spyOn(userAccountService, 'generate').mockResolvedValue(userAccount);
      jest.spyOn(tokenService, 'generateTokens').mockResolvedValue(tokens);

      // when
      await authService.signup(signUpDto);

      // then
      expect(userAccountService.generate).toHaveBeenCalledWith(signUpDto);
      expect(tokenService.generateTokens).toHaveBeenCalledWith(userAccount);
    });
  });

  describe('로그인 테스트', () => {
    it('로그인 성공', async () => {
      // given
      const signInDto = createTestSignInDto();
      const tokens = createTestTokens();
      jest
        .spyOn(userAccountService, 'findByEmail')
        .mockResolvedValue(userAccount);
      jest.spyOn(tokenService, 'generateTokens').mockResolvedValue(tokens);

      // when
      await authService.signIn(signInDto);

      // then
      expect(userAccountService.findByEmail).toHaveBeenCalledWith(
        signInDto.email,
      );
      expect(tokenService.generateTokens).toHaveBeenCalledWith(userAccount);
    });
  });

  function createTestTokens(): Tokens {
    return {
      accessToken: 'test access token',
      refreshToken: 'test refresh token',
    };
  }

  function createTestSignInDto(): SignInDto {
    return {
      email: 'test email',
      password: 'test password',
    };
  }

  function createTestSignUpDto(): SignUpDto {
    return {
      nickname: 'test',
      email: 'test email',
      address: 'test address',
      phoneNumber: '010-1234-5678',
      password: 'test password',
    };
  }

  function createTestUserAccount(): UserAccount {
    const userAccount = new UserAccount();
    return Object.assign(userAccount, {
      id: 'test id',
      createdAt: new Date(),
      nickname: 'test',
      email: 'test email',
      address: 'test address',
      phoneNumber: '010-1234-5678',
      password: 'test password',
    });
  }
});
