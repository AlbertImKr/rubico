import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../service/auth.service';
import { AuthController } from '../controller/auth.controller';
import { SignInDto, SignUpDto } from '../dto/auth.request.dto';
import { Tokens } from '../dto/auth.response.dto';
import { SignInDataDto, SignUpDataDto } from '../dto/signup.data.dto';
import { Email } from '../../shared/models/email.model';
import { Password } from '../../shared/models/password.model';
import { TestConstants } from '../../shared/test-utils/test.constants';
import { TestUtils } from '../../shared/test-utils/test.utils';

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
      expect(authService.signIn).toHaveBeenCalledWith(
        createTestSignInDataDto(),
      );
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
      expect(authService.signup).toHaveBeenCalledWith(
        createTestSignUpDataDto(),
      );
      expect(result).toEqual(tokens);
    });
  });

  function createTestTokens(): Tokens {
    return {
      accessToken: TestConstants.ACCESS_TOKEN,
      refreshToken: TestConstants.REFRESH_TOKEN,
    };
  }

  function createTestSignInDto(): SignInDto {
    return {
      email: TestConstants.USER_EMAIL,
      password: TestConstants.USER_PASSWORD,
    };
  }

  function createTestSignInDataDto(): SignInDataDto {
    return {
      email: new Email(TestConstants.USER_EMAIL),
      password: new Password(TestConstants.USER_PASSWORD),
    };
  }

  function createTestSignUpDto(): SignUpDto {
    return {
      nickname: TestConstants.USER_NICKNAME,
      email: TestConstants.USER_EMAIL,
      address: TestConstants.USER_ADDRESS,
      phoneNumber: TestConstants.USER_PHONE_NUMBER,
      password: TestConstants.USER_PASSWORD,
    };
  }

  function createTestSignUpDataDto(): SignUpDataDto {
    return {
      nickname: TestUtils.nickname,
      email: TestUtils.email,
      address: TestUtils.address,
      phoneNumber: TestUtils.phoneNumber,
      password: TestUtils.password,
    };
  }
});
