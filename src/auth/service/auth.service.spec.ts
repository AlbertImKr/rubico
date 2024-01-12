import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../service/auth.service';
import { UserAccountService } from '../../user-account/service/user-account.service';
import { TokenService } from '../service/token.service';
import { UserAccount } from '../../user-account/entities/user-account.entity';
import { Tokens } from '../dto/auth.response.dto';
import { Nickname } from '../../shared/models/nickname.model';
import { SignInDataDto, SignUpDataDto } from '../dto/signup.data.dto';
import { Email } from '../../shared/models/email.model';
import { Address } from '../../shared/models/address.model';
import { PhoneNumber } from '../../shared/models/phone-number.model';
import { Password } from '../../shared/models/password.model';
import { ObjectId } from 'mongodb';

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
      const data = createTestSignUpDto();
      const tokens = createTestTokens();
      jest.spyOn(userAccountService, 'generate').mockResolvedValue(userAccount);
      jest.spyOn(tokenService, 'generateTokens').mockResolvedValue(tokens);

      // when
      await authService.signup(data);

      // then
      expect(userAccountService.generate).toHaveBeenCalledWith(data);
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
  });

  function createTestTokens(): Tokens {
    return {
      accessToken: 'test access token',
      refreshToken: 'test refresh token',
    };
  }

  function createTestSignInDto(): SignInDataDto {
    return {
      email: new Email('test@email.com'),
      password: new Password('Password1!'),
    };
  }

  function createTestSignUpDto(): SignUpDataDto {
    return {
      nickname: new Nickname('test'),
      email: new Email('test@email.com'),
      address: new Address('test address'),
      phoneNumber: new PhoneNumber('010-1234-5678'),
      password: new Password('Password1!'),
    };
  }

  function createTestUserAccount(): UserAccount {
    const userAccount = new UserAccount();
    return Object.assign(userAccount, {
      id: new ObjectId(),
      createdAt: new Date(),
      nickname: new Nickname('test'),
      email: new Email('test@email.com'),
      address: new Address('test address'),
      phoneNumber: new PhoneNumber('010-1234-5678'),
      password: new Password('Password1!'),
    });
  }
});
