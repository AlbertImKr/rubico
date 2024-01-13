import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Matches, MaxLength, MinLength } from 'class-validator';
import {
  API_ADDRESS,
  API_NICKNAME,
  API_PASSWORD,
  API_USER_EMAIL,
  API_USER_PHONE_NUMBER,
} from '../constants/api.constants';
import {
  IS_NICKNAME,
  IS_PASSWORD,
  IS_USER_ADDRESS,
  IS_USER_EMAIL,
  IS_USER_PHONE_NUMBER,
} from '../constants/validator.constants';

export function IsNickname() {
  return applyDecorators(
    ApiProperty({
      description: API_NICKNAME.DESCRIPTION,
      maxLength: API_NICKNAME.MAX_LENGTH,
      minLength: API_NICKNAME.MIN_LENGTH,
      example: API_NICKNAME.EXAMPLE,
    }),
    MaxLength(IS_NICKNAME.MAX_LENGTH, {
      message: IS_NICKNAME.MAX_LENGTH_MESSAGE,
    }),
    MinLength(IS_NICKNAME.MIN_LENGTH, {
      message: IS_NICKNAME.MIN_LENGTH_MESSAGE,
    }),
  );
}

export function IsUserEmail() {
  return applyDecorators(
    ApiProperty({
      description: API_USER_EMAIL.DESCRIPTION,
      maxLength: API_USER_EMAIL.MAX_LENGTH,
      minLength: API_USER_EMAIL.MIN_LENGTH,
      example: API_USER_EMAIL.EXAMPLE,
    }),
    IsEmail({}, { message: IS_USER_EMAIL.EMAIL_MESSAGE }),
    MaxLength(IS_USER_EMAIL.MAX_LENGTH, {
      message: IS_USER_EMAIL.MAX_LENGTH_MESSAGE,
    }),
    MinLength(IS_USER_EMAIL.MIN_LENGTH, {
      message: IS_USER_EMAIL.MIN_LENGTH_MESSAGE,
    }),
  );
}

export function IsAddress() {
  return applyDecorators(
    ApiProperty({
      description: API_ADDRESS.DESCRIPTION,
      maxLength: API_ADDRESS.MAX_LENGTH,
      minLength: API_ADDRESS.MIN_LENGTH,
      example: API_ADDRESS.EXAMPLE,
    }),
    MaxLength(IS_USER_ADDRESS.MAX_LENGTH, {
      message: IS_USER_ADDRESS.MAX_LENGTH_MESSAGE,
    }),
    MinLength(IS_USER_ADDRESS.MIN_LENGTH, {
      message: IS_USER_ADDRESS.MIN_LENGTH_MESSAGE,
    }),
  );
}

export function IsUserPhoneNumber() {
  return applyDecorators(
    ApiProperty({
      description: API_USER_PHONE_NUMBER.DESCRIPTION,
      maxLength: API_USER_PHONE_NUMBER.MAX_LENGTH,
      minLength: API_USER_PHONE_NUMBER.MIN_LENGTH,
      example: API_USER_PHONE_NUMBER.EXAMPLE,
    }),
    MaxLength(IS_USER_PHONE_NUMBER.MAX_LENGTH, {
      message: IS_USER_PHONE_NUMBER.MAX_LENGTH_MESSAGE,
    }),
    MinLength(IS_USER_PHONE_NUMBER.MIN_LENGTH, {
      message: IS_USER_PHONE_NUMBER.MIN_LENGTH_MESSAGE,
    }),
    Matches(IS_USER_PHONE_NUMBER.MATCHES, {
      message: IS_USER_PHONE_NUMBER.MATCHES_MESSAGE,
    }),
  );
}

export function IsPassword() {
  return applyDecorators(
    ApiProperty({
      description: API_PASSWORD.DESCRIPTION,
      maxLength: API_PASSWORD.MAX_LENGTH,
      minLength: API_PASSWORD.MIN_LENGTH,
      example: API_PASSWORD.EXAMPLE,
    }),
    MaxLength(IS_PASSWORD.MAX_LENGTH, {
      message: IS_PASSWORD.MAX_LENGTH_MESSAGE,
    }),
    MinLength(IS_PASSWORD.MIN_LENGTH, {
      message: IS_PASSWORD.MIN_LENGTH_MESSAGE,
    }),
    Matches(IS_PASSWORD.MATCHES, {
      message: IS_PASSWORD.MATCHES_MESSAGE,
    }),
  );
}
