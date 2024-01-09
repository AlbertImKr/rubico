export const API_TAG = {
  auth: 'Auth',
  userAccount: 'UserAccount',
};

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
};

export const API_ACCESS_TOKEN = {
  DESCRIPTION: '사용자의 엑세스 토큰',
  EXAMPLE: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
};

export const API_REFRESH_TOKEN = {
  DESCRIPTION: '사용자의 리프레시 토큰',
  EXAMPLE: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
};
