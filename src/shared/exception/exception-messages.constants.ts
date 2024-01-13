import {
  INTRODUCTION_MAX_LENGTH,
  INTRODUCTION_MIN_LENGTH,
  USER_ADDRESS_MAX_LENGTH,
  USER_ADDRESS_MIN_LENGTH,
  USER_NICKNAME_MAX_LENGTH,
  USER_NICKNAME_MIN_LENGTH,
  USER_PASSWORD_MAX_LENGTH,
  USER_PASSWORD_MIN_LENGTH,
} from '../constants/validator.constants';

export const EXCEPTION_MESSAGES = {
  // UserAccount
  PASSWORD_MISMATCH: '비밀번호가 일치하지 않습니다.',
  NEED_LOGIN: '로그인이 필요합니다.',
  USER_NOT_FOUND: '존재하지 않는 사용자입니다.',

  // Model
  EMAIL_NOT_MATCHES: '이메일 형식이 올바르지 않습니다.',
  NICKNAME_TOO_LONG: `닉네임은 ${USER_NICKNAME_MAX_LENGTH}글자 이하이어야 합니다.`,
  NICKNAME_TOO_SHORT: `닉네임은 ${USER_NICKNAME_MIN_LENGTH}글자 이상이어야 합니다.`,
  ADDRESS_TOO_LONG: `주소는 ${USER_ADDRESS_MAX_LENGTH}글자 이하이어야 합니다.`,
  ADDRESS_TOO_SHORT: `주소는 ${USER_ADDRESS_MIN_LENGTH}글자 이상이어야 합니다.`,
  USER_PASSWORD_TOO_LONG: `비밀번호는 ${USER_PASSWORD_MAX_LENGTH}글자 이하이어야 합니다.`,
  USER_PASSWORD_TOO_SHORT: `비밀번호는 ${USER_PASSWORD_MIN_LENGTH}글자 이상이어야 합니다.`,
  USER_PASSWORD_NOT_MATCHES:
    '비밀번호는 영문 대문자, 영문 소문자, 숫자, 특수문자를 모두 포함해야 합니다.',
  PHONE_NUMBER_NOT_MATCHES: '전화번호 형식이 올바르지 않습니다.',
  INTRODUCTION_TOO_LONG: `자기소개는 ${INTRODUCTION_MAX_LENGTH}글자 이하이어야 합니다.`,
  INTRODUCTION_TOO_SHORT: `자기소개는 ${INTRODUCTION_MIN_LENGTH}글자 이상이어야 합니다.`,
};
