export const API_TAG = {
  auth: 'Auth',
  userAccount: 'User Account',
};

export const AUTH_API_TAG = {
  name: API_TAG.auth,
  description: '인증 관련 API',
};
export const USER_ACCOUNT_API_TAG = {
  name: API_TAG.userAccount,
  description: '유저 계정 관련 API',
};

export const API_TAGS = [AUTH_API_TAG, USER_ACCOUNT_API_TAG];

export const API_SIGN_UP = {
  CREATED_DESCRIPTION: '유저 계정 생성 성공',
  BAD_REQUEST_DESCRIPTION: '유저 계정 생성 실패, 요청 바디가 올바르지 않음',
  SUMMARY: '유저 계정을 생성한다',
};

export const API_SIGN_IN = {
  CREATED_DESCRIPTION: '로그인 성공',
  BAD_REQUEST_DESCRIPTION: '로그인 실패, 이메일 혹은 비밀번호가 올바르지 않음',
  SUMMARY: '로그인한다',
};

export const API_NICKNAME = {
  DESCRIPTION: '사용자의 닉네임',
  MAX_LENGTH: 20,
  MIN_LENGTH: 4,
  EXAMPLE: 'john Doe',
  EDIT_EXAMPLE: 'David Kim',
};

export const API_USER_EMAIL = {
  DESCRIPTION: '사용자의 이메일 주소',
  MAX_LENGTH: 50,
  MIN_LENGTH: 10,
  EXAMPLE: 'john@example.com',
};

export const API_ADDRESS = {
  DESCRIPTION: '사용자의 주소',
  MAX_LENGTH: 100,
  MIN_LENGTH: 10,
  EXAMPLE: 'Seoul, Korea',
  EDIT_EXAMPLE: 'Busan, Korea',
};

export const API_USER_PHONE_NUMBER = {
  DESCRIPTION:
    '사용자의 전화번호(하이픈(-) 포함), ex) 10-1234-5678, 010-1234-5678',
  MAX_LENGTH: 20,
  MIN_LENGTH: 10,
  EXAMPLE: '10-1234-5678',
};

export const API_PASSWORD = {
  DESCRIPTION: '사용자의 비밀번호',
  MAX_LENGTH: 20,
  MIN_LENGTH: 8,
  EXAMPLE: 'Password1!',
  EDIT_EXAMPLE: 'Password2!',
};

export const API_ACCESS_TOKEN = {
  DESCRIPTION: '사용자의 엑세스 토큰',
  EXAMPLE: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
};

export const API_REFRESH_TOKEN = {
  DESCRIPTION: '사용자의 리프레시 토큰',
  EXAMPLE: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
};

export const API_UPDATE_USER_INFO = {
  OK_DESCRIPTION: '사용자 정보 수정 성공',
  BAD_REQUEST_DESCRIPTION: '사용자 정보 수정 실패, 요청 바디가 올바르지 않음',
  SUMMARY: '사용자 정보를 수정한다',
};

export const API_UPDATE_USER_PASSWORD = {
  OK_DESCRIPTION: '사용자 비밀번호 수정 성공',
  BAD_REQUEST_DESCRIPTION:
    '사용자 비밀번호 수정 실패, 요청 바디가 올바르지 않음',
  SUMMARY: '사용자 비밀번호를 수정한다',
};

export const API_INTRODUCTION = {
  DESCRIPTION: '사용자의 자기소개',
  MAX_LENGTH: 200,
  MIN_LENGTH: 1,
  EXAMPLE: 'Hello, World!',
  EDIT_EXAMPLE: 'Hi, World!',
};
