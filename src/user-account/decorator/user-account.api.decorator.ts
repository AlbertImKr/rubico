import { applyDecorators, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateUserAccountDto } from '../dto/user-account.request.dto';
import { UserAccountIdDto } from '../dto/user-account.response.dto';

export function ApiCreateUserAccount() {
  return applyDecorators(
    ApiTags('User Account'),
    ApiResponse({
      status: 201,
      description: '유저 계정 생성 성공',
      type: UserAccountIdDto,
    }),
    ApiResponse({
      status: 400,
      description: '유저 계정 생성 실패, 요청 바디가 올바르지 않음',
    }),
    ApiOperation({ summary: '유저 계정을 생성한다' }),
    ApiBody({ type: CreateUserAccountDto }),
    Post(),
  );
}
