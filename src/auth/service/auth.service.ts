import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserAccountService } from '../../user-account/service/user-account.service';
import { Tokens } from '../dto/auth.response.dto';
import { EXCEPTION_MESSAGES } from '../../shared/exception/exception-messages.constants';
import { TokenService } from './token.service';
import { SignInDataDto, SignUpDataDto } from '../dto/signup.data.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userAccountService: UserAccountService,
    private readonly tokenService: TokenService,
  ) {}

  async signIn(data: SignInDataDto): Promise<Tokens> {
    const userAccount = await this.userAccountService.findByEmail(data.email);
    if (!userAccount?.isSamePassword(data.password)) {
      throw new UnauthorizedException(EXCEPTION_MESSAGES.PASSWORD_MISMATCH);
    }
    return this.tokenService.generateTokens(userAccount);
  }

  async signup(data: SignUpDataDto): Promise<Tokens> {
    const userAccount = await this.userAccountService.generate(data);
    return this.tokenService.generateTokens(userAccount);
  }
}
