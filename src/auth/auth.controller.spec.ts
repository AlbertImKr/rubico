import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SignInDto, SignUpDto } from './dto/auth.request.dto';
import { Tokens } from './dto/auth.response.dto';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            signIn: jest.fn(),
            signup: jest.fn(),
          },
        },
      ],
    }).compile();

    authController = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  describe('로그인', () => {
    it('성공', async () => {
      // given
      const signInDto = createTestSignInDto();
      const tokens = createTestTokens();
      jest.spyOn(authService, 'signIn').mockResolvedValue(tokens);

      // when
      const result = await authController.signIn(signInDto);

      // then
      expect(authService.signIn).toHaveBeenCalledWith(signInDto);
      expect(result).toEqual(tokens);
    });
  });

  describe('회원가입', () => {
    it('성공', async () => {
      // given
      const signUpDto = createTestSignUpDto();
      const tokens = createTestTokens();
      jest.spyOn(authService, 'signup').mockResolvedValue(tokens);

      // when
      const result = await authController.signup(signUpDto);

      // then
      expect(authService.signup).toHaveBeenCalledWith(signUpDto);
      expect(result).toEqual(tokens);
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
});
