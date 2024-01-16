import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import {
  API_ADDRESS,
  API_INTRODUCTION,
  API_NICKNAME,
  API_PASSWORD,
  API_USER_EMAIL,
  API_USER_PHONE_NUMBER,
} from '../constants/api.constants';

export function ApiPropertyNickname() {
  return applyDecorators(
    ApiProperty({
      description: API_NICKNAME.DESCRIPTION,
      maxLength: API_NICKNAME.MAX_LENGTH,
      minLength: API_NICKNAME.MIN_LENGTH,
      example: API_NICKNAME.EXAMPLE,
    }),
  );
}

export function ApiPropertyEditNickname() {
  return applyDecorators(
    ApiProperty({
      description: API_NICKNAME.DESCRIPTION,
      maxLength: API_NICKNAME.MAX_LENGTH,
      minLength: API_NICKNAME.MIN_LENGTH,
      example: API_NICKNAME.EDIT_EXAMPLE,
    }),
  );
}

export function ApiPropertyUserEmail() {
  return applyDecorators(
    ApiProperty({
      description: API_USER_EMAIL.DESCRIPTION,
      maxLength: API_USER_EMAIL.MAX_LENGTH,
      minLength: API_USER_EMAIL.MIN_LENGTH,
      example: API_USER_EMAIL.EXAMPLE,
    }),
  );
}

export function ApiPropertyUserAddress() {
  return applyDecorators(
    ApiProperty({
      description: API_ADDRESS.DESCRIPTION,
      maxLength: API_ADDRESS.MAX_LENGTH,
      minLength: API_ADDRESS.MIN_LENGTH,
      example: API_ADDRESS.EXAMPLE,
    }),
  );
}

export function ApiPropertyEditUserAddress() {
  return applyDecorators(
    ApiProperty({
      description: API_ADDRESS.DESCRIPTION,
      maxLength: API_ADDRESS.MAX_LENGTH,
      minLength: API_ADDRESS.MIN_LENGTH,
      example: API_ADDRESS.EDIT_EXAMPLE,
    }),
  );
}

export function ApiPropertyUserPhoneNumber() {
  return applyDecorators(
    ApiProperty({
      description: API_USER_PHONE_NUMBER.DESCRIPTION,
      maxLength: API_USER_PHONE_NUMBER.MAX_LENGTH,
      minLength: API_USER_PHONE_NUMBER.MIN_LENGTH,
      example: API_USER_PHONE_NUMBER.EXAMPLE,
    }),
  );
}

export function ApiPropertyPassword() {
  return applyDecorators(
    ApiProperty({
      description: API_PASSWORD.DESCRIPTION,
      maxLength: API_PASSWORD.MAX_LENGTH,
      minLength: API_PASSWORD.MIN_LENGTH,
      example: API_PASSWORD.EXAMPLE,
    }),
  );
}

export function ApiPropertyEditPassword() {
  return applyDecorators(
    ApiProperty({
      description: API_PASSWORD.DESCRIPTION,
      maxLength: API_PASSWORD.MAX_LENGTH,
      minLength: API_PASSWORD.MIN_LENGTH,
      example: API_PASSWORD.EDIT_EXAMPLE,
    }),
  );
}

export function ApiPropertyIntroduction() {
  return applyDecorators(
    ApiProperty({
      description: API_INTRODUCTION.DESCRIPTION,
      maxLength: API_INTRODUCTION.MAX_LENGTH,
      minLength: API_INTRODUCTION.MIN_LENGTH,
      example: API_INTRODUCTION.EXAMPLE,
    }),
  );
}

export function ApiPropertyEditIntroduction() {
  return applyDecorators(
    ApiProperty({
      description: API_INTRODUCTION.DESCRIPTION,
      maxLength: API_INTRODUCTION.MAX_LENGTH,
      minLength: API_INTRODUCTION.MIN_LENGTH,
      example: API_INTRODUCTION.EDIT_EXAMPLE,
    }),
  );
}
