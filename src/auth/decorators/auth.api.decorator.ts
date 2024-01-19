import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiBody, ApiTags } from '@nestjs/swagger';
import { Tokens } from '../dto/auth.response.dto';
import { SignInDto, SignUpDto } from '../dto/auth.request.dto';
import {
  API_TAG,
  API_SIGN_IN,
  API_SIGN_UP,
} from '../../shared/constants/api.constants';

export function ApiSignUp() {
  return applyDecorators(
    ApiTags(API_TAG.auth),
    ApiResponse({
      status: HttpStatus.CREATED,
      description: API_SIGN_UP.CREATED_DESCRIPTION,
      type: Tokens,
    }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description: API_SIGN_UP.BAD_REQUEST_DESCRIPTION,
    }),
    ApiOperation({ summary: API_SIGN_UP.SUMMARY }),
    ApiBody({ type: SignUpDto }),
  );
}

export function ApiSignIn() {
  return applyDecorators(
    ApiTags(API_TAG.auth),
    ApiResponse({
      status: HttpStatus.OK,
      description: API_SIGN_IN.CREATED_DESCRIPTION,
      type: Tokens,
    }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description: API_SIGN_IN.BAD_REQUEST_DESCRIPTION,
    }),
    ApiOperation({ summary: API_SIGN_IN.SUMMARY }),
    ApiBody({ type: SignInDto }),
  );
}
