import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserAccountService } from '../user-account/user-account.service';
import { JwtService } from '@nestjs/jwt';
import { Tokens } from './dto/auth.response.dto';
import { ConfigService } from '@nestjs/config';
import { JWT_CONSTANTS } from '../shared/constants/jwt.constants';
import { EXCEPTION_MESSAGES } from '../shared/exception/exception-messages.constants';
import { SignUpDto } from './dto/auth.request.dto';
import { UserAccount } from '../user-account/entities/user-account.entity';

@Injectable()
export class AuthService {
  constructor(
    private userAccountService: UserAccountService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async signIn(email: string, password: string): Promise<Tokens> {
    const userAccount = await this.userAccountService.findByEmail(email);
    if (!userAccount?.isSamePassword(password)) {
      throw new UnauthorizedException(EXCEPTION_MESSAGES);
    }
    return this.generateTokens(userAccount);
  }

  async signup(signUpDto: SignUpDto): Promise<Tokens> {
    const userAccount = await this.userAccountService.generate(
      signUpDto.nickname,
      signUpDto.email,
      signUpDto.address,
      signUpDto.phoneNumber,
      signUpDto.password,
    );
    return this.generateTokens(userAccount);
  }

  private generateTokens(user: UserAccount) {
    const accessToken = this.generateAccessToken(
      user.id.toHexString(),
      user.nickname,
    );
    const refreshToken = this.generateRefreshToken(
      user.id.toHexString(),
      user.nickname,
    );
    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }

  private generateAccessToken(sub: string, nickname: string) {
    const payload = {
      sub: sub,
      nickname: nickname,
      token_type: JWT_CONSTANTS.ACCESS_TOKEN_IDENTIFY,
    };
    return this.jwtService.sign(payload, {
      expiresIn: this.configService.get(JWT_CONSTANTS.ACCESS_TOKEN_EXPIRES_IN),
    });
  }

  private generateRefreshToken(sub: string, nickname: string) {
    const payload = {
      sub: sub,
      nickname: nickname,
      token_type: JWT_CONSTANTS.REFRESH_TOKEN_IDENTIFY,
    };
    return this.jwtService.sign(payload, {
      expiresIn: this.configService.get(JWT_CONSTANTS.REFRESH_TOKEN_EXPIRES_IN),
    });
  }
}
