import { applyDecorators } from '@nestjs/common';
import {
  ApiOperation,
  ApiBody,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiTags,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { ResumeRegisterRequestDto } from '../dto/resume.request.dto';
import { IdResponse } from '../../shared/utils/response.dto';
import {
  API_REGISTER_RESUME,
  API_TAG,
} from '../../shared/constants/api.constants';

export function ApiRegisterResume() {
  return applyDecorators(
    ApiTags(API_TAG.resume),
    ApiOperation({ summary: API_REGISTER_RESUME.SUMMARY }),
    ApiBody({ type: ResumeRegisterRequestDto }),
    ApiBearerAuth(),
    ApiCreatedResponse({
      type: IdResponse,
      description: API_REGISTER_RESUME.CREATED_DESCRIPTION,
    }),
    ApiBadRequestResponse({
      description: API_REGISTER_RESUME.BAD_REQUEST_DESCRIPTION,
    }),
  );
}
