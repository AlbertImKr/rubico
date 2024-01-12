import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JWT_CONSTANTS } from '../../shared/constants/jwt.constants';
import { UserAccount } from '../../user-account/entities/user-account.entity';
import { JwtService } from '@nestjs/jwt';
import { Tokens } from '../dto/auth.response.dto';

@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async generateTokens(user: UserAccount): Promise<Tokens> {
    const accessToken = await this.generateAccessToken(
      user.id.toHexString(),
      user.nickname,
    );
    const refreshToken = await this.generateRefreshToken(
      user.id.toHexString(),
      user.nickname,
    );
    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }

  async generateAccessToken(sub: string, nickname: string) {
    const payload = {
      sub: sub,
      nickname: nickname,
      token_type: JWT_CONSTANTS.ACCESS_TOKEN_IDENTIFY,
    };
    return this.jwtService.sign(payload, {
      expiresIn: this.configService.get(JWT_CONSTANTS.ACCESS_TOKEN_EXPIRES_IN),
    });
  }

  async generateRefreshToken(sub: string, nickname: string) {
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
