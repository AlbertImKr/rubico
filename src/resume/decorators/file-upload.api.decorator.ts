import { HttpStatus, applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  API_TAG,
  API_UPLOAD_PORTFOLIO_FILE,
  API_UPLOAD_PROFILE_IMAGE,
  UPLOAD_FILE_API_PROPERTY,
} from '../../shared/constants/api.constants';
import { IdResponse } from '../../shared/utils/response.dto';

export function ApiUploadProfileImage() {
  return applyDecorators(
    ApiTags(API_TAG.files),
    ApiBearerAuth(),
    ApiConsumes('multipart/form-data'),
    ApiResponse({
      status: HttpStatus.OK,
      description: API_UPLOAD_PROFILE_IMAGE.OK_DESCRIPTION,
      type: IdResponse,
    }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description: API_UPLOAD_PROFILE_IMAGE.BAD_REQUEST_DESCRIPTION,
    }),
    ApiOperation({ summary: API_UPLOAD_PROFILE_IMAGE.SUMMARY }),
    ApiBody(UPLOAD_FILE_API_PROPERTY),
  );
}

export function ApiUploadPortfolioFile() {
  return applyDecorators(
    ApiTags(API_TAG.files),
    ApiBearerAuth(),
    ApiConsumes('multipart/form-data'),
    ApiResponse({
      status: HttpStatus.OK,
      description: API_UPLOAD_PORTFOLIO_FILE.OK_DESCRIPTION,
      type: IdResponse,
    }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description: API_UPLOAD_PORTFOLIO_FILE.BAD_REQUEST_DESCRIPTION,
    }),
    ApiOperation({ summary: API_UPLOAD_PORTFOLIO_FILE.SUMMARY }),
    ApiBody(UPLOAD_FILE_API_PROPERTY),
  );
}
