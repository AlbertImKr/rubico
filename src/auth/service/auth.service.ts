import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserAccountWriteService } from '../../user-account/service/user-account.write.service';
import { Tokens } from '../dto/auth.response.dto';
import { EXCEPTION_MESSAGES } from '../../shared/exception/exception-messages.constants';
import { TokenService } from './token.service';
import { SignInData, SignUpData } from '../dto/auth.data.dto';
import { PasswordHasher } from '../../shared/utils/password-hasher';

@Injectable()
export class AuthService {
  constructor(
    private readonly userAccountService: UserAccountWriteService,
    private readonly tokenService: TokenService,
  ) {}

  async signIn(data: SignInData): Promise<Tokens> {
    const userAccount = await this.userAccountService.findByEmail(data.email);
    if (!PasswordHasher.compare(userAccount.hashedPassword, data.password)) {
      throw new UnauthorizedException(EXCEPTION_MESSAGES.PASSWORD_IS_MISMATCH);
    }
    return this.tokenService.generateTokens(userAccount);
  }

  async signup(data: SignUpData): Promise<Tokens> {
    const hashedPassword = await PasswordHasher.hash(data.password);
    const userAccount = await this.userAccountService.generate({
      ...data,
      hashedPassword: hashedPassword,
    });
    return this.tokenService.generateTokens(userAccount);
  }
}
