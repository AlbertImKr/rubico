import { ApiProperty } from '@nestjs/swagger';
import {
  API_ACCESS_TOKEN,
  API_REFRESH_TOKEN,
} from '../../shared/constants/api.constants';

export class Tokens {
  @ApiProperty({
    description: API_ACCESS_TOKEN.DESCRIPTION,
    example: API_ACCESS_TOKEN.EXAMPLE,
  })
  accessToken: string;

  @ApiProperty({
    description: API_REFRESH_TOKEN.DESCRIPTION,
    example: API_REFRESH_TOKEN.EXAMPLE,
  })
  refreshToken: string;
}
