import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { SignInDto, SignUpDto } from '../dto/auth.request.dto';
import { Public } from '../../shared/decorators/auth.decorator';
import { Tokens } from '../dto/auth.response.dto';
import { ApiSignIn, ApiSignUp } from '../decorators/auth.api.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @ApiSignIn()
  @HttpCode(200)
  @Post('login')
  signIn(@Body() signInDto: SignInDto): Promise<Tokens> {
    return this.authService.signIn(signInDto);
  }

  @Public()
  @ApiSignUp()
  @Post('signup')
  async signup(@Body() signUpDto: SignUpDto): Promise<Tokens> {
    return this.authService.signup(signUpDto);
  }
}
