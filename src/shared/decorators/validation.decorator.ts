import { applyDecorators } from '@nestjs/common';
import { IsEmail, Matches, MaxLength, MinLength } from 'class-validator';
import {
  IS_INTRODUCTION,
  IS_NICKNAME,
  IS_PASSWORD,
  IS_USER_ADDRESS,
  IS_USER_EMAIL,
  IS_USER_PHONE_NUMBER,
} from '../constants/validator.constants';

export function IsNickname() {
  return applyDecorators(
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

export function IsIntroduction() {
  return applyDecorators(
    MaxLength(IS_INTRODUCTION.MAX_LENGTH, {
      message: IS_INTRODUCTION.MAX_LENGTH_MESSAGE,
    }),
    MinLength(IS_INTRODUCTION.MIN_LENGTH, {
      message: IS_INTRODUCTION.MIN_LENGTH_MESSAGE,
    }),
  );
}
