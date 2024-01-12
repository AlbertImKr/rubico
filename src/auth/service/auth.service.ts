import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserAccountService } from '../../user-account/service/user-account.service';
import { Tokens } from '../dto/auth.response.dto';
import { EXCEPTION_MESSAGES } from '../../shared/exception/exception-messages.constants';
import { SignInDto, SignUpDto } from '../dto/auth.request.dto';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userAccountService: UserAccountService,
    private readonly tokenService: TokenService,
  ) {}

  async signIn(signInDto: SignInDto): Promise<Tokens> {
    console.log('__dirname :>> ', __dirname);
    const userAccount = await this.userAccountService.findByEmail(
      signInDto.email,
    );
    if (!userAccount?.isSamePassword(signInDto.password)) {
      throw new UnauthorizedException(EXCEPTION_MESSAGES);
    }
    return this.tokenService.generateTokens(userAccount);
  }

  async signup(signUpDto: SignUpDto): Promise<Tokens> {
    const userAccount = await this.userAccountService.generate(signUpDto);
    return this.tokenService.generateTokens(userAccount);
  }
}
