import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { SignInDto, SignUpDto } from '../dto/auth.request.dto';
import { Public } from '../../shared/decorators/auth.decorator';
import { Tokens } from '../dto/auth.response.dto';
import { ApiSignIn, ApiSignUp } from '../decorators/auth.api.decorator';
import {
  SignInDataDtoTransformer,
  SignUpDataDtoTransformer,
} from '../transformers/auth.dto.transformer';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @ApiSignIn()
  @HttpCode(200)
  @Post('login')
  signIn(@Body() signInDto: SignInDto): Promise<Tokens> {
    const data = SignInDataDtoTransformer.toDto(signInDto);
    return this.authService.signIn(data);
  }

  @Public()
  @ApiSignUp()
  @Post('signup')
  async signup(@Body() signUpDto: SignUpDto): Promise<Tokens> {
    const data = SignUpDataDtoTransformer.toDto(signUpDto);
    return this.authService.signup(data);
  }
}
