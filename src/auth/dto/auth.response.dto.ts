import {
  ApiPropertyAccessToken,
  ApiPropertyRefreshToken,
} from '../decorators/auth.property.api.decorator';

export class Tokens {
  @ApiPropertyAccessToken()
  readonly accessToken: string;

  @ApiPropertyRefreshToken()
  readonly refreshToken: string;
}
