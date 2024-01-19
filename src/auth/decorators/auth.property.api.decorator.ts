import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import {
  API_ACCESS_TOKEN,
  API_REFRESH_TOKEN,
} from '../../shared/constants/api.constants';

export function ApiPropertyAccessToken() {
  return applyDecorators(
    ApiProperty({
      description: API_ACCESS_TOKEN.DESCRIPTION,
      example: API_ACCESS_TOKEN.EXAMPLE,
    }),
  );
}

export function ApiPropertyRefreshToken() {
  return applyDecorators(
    ApiProperty({
      description: API_REFRESH_TOKEN.DESCRIPTION,
      example: API_REFRESH_TOKEN.EXAMPLE,
    }),
  );
}
