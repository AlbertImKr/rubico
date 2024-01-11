import { Test, TestingModule } from '@nestjs/testing';
import { UserAccount } from '../user-account/entities/user-account.entity';
import { TokenService } from './token.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { ObjectId } from 'mongodb';
import { JWT_CONSTANTS } from '../shared/constants/jwt.constants';

describe('토큰 서비스', () => {
  let tokenService: TokenService;
  let userAccount: UserAccount;
  let jwtService: JwtService;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TokenService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn(),
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(),
          },
        },
      ],
    }).compile();

    tokenService = module.get<TokenService>(TokenService);
    jwtService = module.get<JwtService>(JwtService);
    configService = module.get<ConfigService>(ConfigService);
    userAccount = generateTestUserAccount();
  });

  it('should be defined', () => {
    expect(tokenService).toBeDefined();
    expect(jwtService).toBeDefined();
    expect(configService).toBeDefined();
  });

  describe('access 및 refresh 토큰을 생성', () => {
    it('성공', async () => {
      // given
      const expiresIn = '1h';
      jest.spyOn(configService, 'get').mockReturnValue(expiresIn);
      jest.spyOn(jwtService, 'sign').mockReturnValue('token');

      // when
      await tokenService.generateTokens(userAccount);

      // then
      expect(jwtService.sign).toHaveBeenCalledTimes(2);
    });
  });

  describe('access 토큰을 생성', () => {
    it('성공', async () => {
      // given
      const expiresIn = '1h';
      jest.spyOn(configService, 'get').mockReturnValue(expiresIn);
      jest.spyOn(jwtService, 'sign').mockReturnValue('token');

      // when
      await tokenService.generateAccessToken(
        userAccount.id.toHexString(),
        userAccount.nickname,
      );

      // then
      expect(jwtService.sign).toHaveBeenCalledTimes(1);
      expect(jwtService.sign).toHaveBeenCalledWith(
        {
          sub: userAccount.id.toHexString(),
          nickname: userAccount.nickname,
          token_type: JWT_CONSTANTS.ACCESS_TOKEN_IDENTIFY,
        },
        {
          expiresIn: expiresIn,
        },
      );
    });
  });

  describe('refresh 토큰을 생성', () => {
    it('성공', async () => {
      // given
      const expiresIn = '1h';
      jest.spyOn(configService, 'get').mockReturnValue(expiresIn);
      jest.spyOn(jwtService, 'sign').mockReturnValue('token');

      // when
      await tokenService.generateRefreshToken(
        userAccount.id.toHexString(),
        userAccount.nickname,
      );

      // then
      expect(jwtService.sign).toHaveBeenCalledTimes(1);
      expect(jwtService.sign).toHaveBeenCalledWith(
        {
          sub: userAccount.id.toHexString(),
          nickname: userAccount.nickname,
          token_type: JWT_CONSTANTS.REFRESH_TOKEN_IDENTIFY,
        },
        {
          expiresIn: expiresIn,
        },
      );
    });
  });

  function generateTestUserAccount() {
    const userAccount = new UserAccount();
    userAccount.id = new ObjectId();
    userAccount.nickname = 'test';
    return userAccount;
  }
});
