import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto/auth.request.dto';
import { Public } from '../shared/decorators/auth.decorator';
import { Tokens } from './dto/auth.response.dto';
import { ApiSignIn, ApiSignUp } from './decorators/auth.api.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @ApiSignIn()
  @Post('login')
  signIn(@Body() signInDto: SignInDto): Promise<Tokens> {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @Public()
  @ApiSignUp()
  @Post('signup')
  async signup(@Body() signUpDto: SignUpDto): Promise<Tokens> {
    return this.authService.signup(signUpDto);
  }
}
