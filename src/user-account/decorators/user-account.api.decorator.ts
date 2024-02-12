import { HttpStatus, applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  API_GET_USER_INFO,
  API_SOFT_DELETE_USER,
  API_TAG,
  API_UPDATE_USER_INFO,
  API_UPDATE_USER_PASSWORD,
} from '../../shared/constants/api.constants';
import { UserInfoResponse } from '../dto/user-account.response.dto';
import {
  EditPasswordRequest,
  EditUserInfoRequest,
} from '../dto/user-account.request.dto';

export function ApiUpdateUserInfo() {
  return applyDecorators(
    ApiTags(API_TAG.userAccount),
    ApiResponse({
      status: HttpStatus.OK,
      description: API_UPDATE_USER_INFO.OK_DESCRIPTION,
      type: UserInfoResponse,
    }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description: API_UPDATE_USER_INFO.BAD_REQUEST_DESCRIPTION,
    }),
    ApiOperation({ summary: API_UPDATE_USER_INFO.SUMMARY }),
    ApiBody({ type: EditUserInfoRequest }),
    ApiBearerAuth(),
  );
}

export function ApiUpdateUserPassword() {
  return applyDecorators(
    ApiTags(API_TAG.userAccount),
    ApiResponse({
      status: HttpStatus.NO_CONTENT,
      description: API_UPDATE_USER_PASSWORD.OK_DESCRIPTION,
    }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description: API_UPDATE_USER_PASSWORD.BAD_REQUEST_DESCRIPTION,
    }),
    ApiOperation({ summary: API_UPDATE_USER_PASSWORD.SUMMARY }),
    ApiBody({ type: EditPasswordRequest }),
    ApiBearerAuth(),
  );
}

export function ApiSoftDeleteUser() {
  return applyDecorators(
    ApiTags(API_TAG.userAccount),
    ApiResponse({
      status: HttpStatus.NO_CONTENT,
      description: API_SOFT_DELETE_USER.OK_DESCRIPTION,
    }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description: API_SOFT_DELETE_USER.BAD_REQUEST_DESCRIPTION,
    }),
    ApiOperation({ summary: API_SOFT_DELETE_USER.SUMMARY }),
    ApiBearerAuth(),
  );
}

export function ApiGetUserInfo() {
  return applyDecorators(
    ApiTags(API_TAG.userAccount),
    ApiResponse({
      status: HttpStatus.OK,
      description: API_GET_USER_INFO.OK_DESCRIPTION,
      type: UserInfoResponse,
    }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description: API_GET_USER_INFO.BAD_REQUEST_DESCRIPTION,
    }),
    ApiOperation({ summary: API_GET_USER_INFO.SUMMARY }),
    ApiBearerAuth(),
  );
}
