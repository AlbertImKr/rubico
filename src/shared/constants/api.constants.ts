import {
  BRIEF_INTRODUCTION_MAX_LENGTH,
  COMPANY_NAME_MAX_LENGTH,
  COMPANY_NAME_MIN_LENGTH,
  DEPARTMENT_MAX_LENGTH,
  DEPARTMENT_MIN_LENGTH,
  ORGANIZATION_NAME_MAX_LENGTH,
  ORGANIZATION_NAME_MIN_LENGTH,
  PROJECT_DESCRIPTION_MAX_LENGTH,
  PROJECT_DESCRIPTION_MIN_LENGTH,
  PROJECT_NAME_MAX_LENGTH,
  PROJECT_NAME_MIN_LENGTH,
  RESUME_OCCUPATION_MAX_LENGTH,
  WORK_EXPERIENCE_DESCRIPTION_MAX_LENGTH,
  WORK_EXPERIENCE_DESCRIPTION_MIN_LENGTH,
} from './validator.constants';

export const API_CONFIG = {
  title: 'Rubicon API',
  description: 'Copy of Rallit',
  version: '1.0',
  customSiteTitle: 'Rubicon API',
  path: 'api',
};

export const API_TAG = {
  auth: 'Auth',
  userAccount: 'User Account',
  resume: 'Resume',
  files: 'files',
};

export const AUTH_API_TAG = {
  name: API_TAG.auth,
  description: '인증 관련 API',
};
export const USER_ACCOUNT_API_TAG = {
  name: API_TAG.userAccount,
  description: '유저 계정 관련 API',
};

export const RESUME_API_TAG = {
  name: API_TAG.resume,
  description: '이력서 관련 API',
};

export const FILES_API_TAG = {
  name: API_TAG.files,
  description: '파일 관련 API',
};

export const API_TAGS = [
  AUTH_API_TAG,
  USER_ACCOUNT_API_TAG,
  RESUME_API_TAG,
  FILES_API_TAG,
];

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

export const API_GET_USER_INFO = {
  OK_DESCRIPTION: '사용자 정보 조회 성공',
  BAD_REQUEST_DESCRIPTION: '사용자 정보 조회 실패, 요청 바디가 올바르지 않음',
  SUMMARY: '사용자 정보를 조회한다',
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

export const API_SOFT_DELETE_USER = {
  OK_DESCRIPTION: '사용자 계정 삭제 성공',
  BAD_REQUEST_DESCRIPTION: '사용자 계정 삭제 실패, 요청 바디가 올바르지 않음',
  SUMMARY: '사용자 계정을 삭제한다',
};

export const API_INTRODUCTION = {
  DESCRIPTION: '사용자의 자기소개',
  MAX_LENGTH: 200,
  MIN_LENGTH: 1,
  EXAMPLE: 'Hello, World!',
  EDIT_EXAMPLE: 'Hi, World!',
};

export const API_UPLOAD_PROFILE_IMAGE = {
  OK_DESCRIPTION: '이미지 파일 업로드 성공',
  BAD_REQUEST_DESCRIPTION: '이미지 파일 업로드 실패',
  SUMMARY: '이미지 파일 업로드한다',
};

export const API_UPLOAD_PORTFOLIO_FILE = {
  OK_DESCRIPTION: '포트폴리오 업로드 성공',
  BAD_REQUEST_DESCRIPTION: '포트폴리오 업로드 실패',
  SUMMARY: '포트폴리오 파일 업로드한다',
};

export const API_RESUME_OCCUPATION = {
  DESCRIPTION: '사용자의 직업',
  MAX_LENGTH: RESUME_OCCUPATION_MAX_LENGTH,
  EXAMPLE: '백엔드 개발자',
};

export const API_RESUME_BRIEF_INTRODUCTION = {
  DESCRIPTION: '이력서의 간단한 소개',
  MAX_LENGTH: BRIEF_INTRODUCTION_MAX_LENGTH,
  EXAMPLE: '안녕하세요, 백엔드 개발자입니다.',
};

export const UPLOAD_FILE_API_PROPERTY = {
  required: true,
  type: 'multipart/form-data',
  schema: {
    type: 'object',
    properties: {
      file: {
        type: 'string',
        format: 'binary',
        description: '얼로드 할 파일',
      },
    },
  },
};

export const API_REGISTER_RESUME = {
  CREATED_DESCRIPTION: '이력서 등록 성공',
  BAD_REQUEST_DESCRIPTION: '이력서 등록 실패, 요청 바디가 올바르지 않음',
  SUMMARY: '이력서를 등록한다',
};

export const API_PROFILE_IMAGE_ID = {
  DESCRIPTION: '프로필 이미지의 ID',
  EXAMPLE: '60f5f3f6c8a4e4f9e8f6f9e8',
};

export const API_PORTFOLIO_FILE_IDS = {
  DESCRIPTION: '포트폴리오 파일들의 ID',
  EXAMPLE: ['60f5f3f6c8a4e4f9e8f6f9f0', '60f5f3f6c8a4e4f9e8f6f9f1'],
};

export const API_PORTFOLIO_LINKS = {
  DESCRIPTION: '포트폴리오 링크들',
  EXAMPLE: [
    'https://example.com/1',
    'https://example.com/2',
    'https://example.com/3',
  ],
};

export const API_TECHNICAL_SKILL_IDS = {
  DESCRIPTION: '기술 스킬들의 아이디들',
  EXAMPLE: ['60f5f3f6c8a4e4f9e8f6f9s1', '60f5f3f6c8a4e4f9e8f6f9s2'],
};

export const API_PROJECT_NAME = {
  DESCRIPTION: '프로젝트 이름',
  MAX_LENGTH: PROJECT_NAME_MAX_LENGTH,
  MIN_LENGTH: PROJECT_NAME_MIN_LENGTH,
  EXAMPLE: 'Rubicon',
};

export const API_ORGANIZATION_NAME = {
  DESCRIPTION: '로직 이름',
  MAX_LENGTH: ORGANIZATION_NAME_MAX_LENGTH,
  MIN_LENGTH: ORGANIZATION_NAME_MIN_LENGTH,
  EXAMPLE: 'Rubicon',
};

export const API_PROCESS_STATUS = {
  DESCRIPTION: '프로젝트 진행 상태',
  EXAMPLE: '진행중',
};

export const API_PROJECT_DESCRIPTION = {
  DESCRIPTION: '프로젝트 설명',
  MAX_LENGTH: PROJECT_DESCRIPTION_MAX_LENGTH,
  MIN_LENGTH: PROJECT_DESCRIPTION_MIN_LENGTH,
  EXAMPLE: '루비콘 서비스 개발을 위한 프로젝트',
};

export const API_STARTED_AT = {
  DESCRIPTION: '시작일자',
  EXAMPLE: '2023-07-20',
};

export const API_ENDED_AT = {
  DESCRIPTION: '종료일자',
  EXAMPLE: '2023-10-20',
};

export const API_COMPANY_NAME = {
  DESCRIPTION: '회사 이름',
  MAX_LENGTH: COMPANY_NAME_MAX_LENGTH,
  MIN_LENGTH: COMPANY_NAME_MIN_LENGTH,
  EXAMPLE: 'Rubicon',
};

export const API_DEPARTMENT = {
  DESCRIPTION: '부서 이름',
  MAX_LENGTH: DEPARTMENT_MAX_LENGTH,
  MIN_LENGTH: DEPARTMENT_MIN_LENGTH,
  EXAMPLE: '개발팀',
};

export const API_WORK_EXPERIENCE_DESCRIPTION = {
  DESCRIPTION: '근무 내용',
  MAX_LENGTH: WORK_EXPERIENCE_DESCRIPTION_MAX_LENGTH,
  MIN_LENGTH: WORK_EXPERIENCE_DESCRIPTION_MIN_LENGTH,
  EXAMPLE: '루비콘 서비스 위한 백엔드 개발',
};

export const API_EMPLOYMENT_TYPE = {
  DESCRIPTION: '고용 형태',
  EXAMPLE: '정규직',
};

export const API_POSITION = {
  DESCRIPTION: '직책',
  EXAMPLE: '개발자',
};

export const API_FIELD_OF_INTEREST_IDS = {
  DESCRIPTION: '관심 분야들의 아이디들',
  EXAMPLE: ['60f5f3f6c8a4e4f9e8f6f9i1', '60f5f3f6c8a4e4f9e8f6f9i2'],
};
