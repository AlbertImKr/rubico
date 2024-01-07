import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Matches, MaxLength, MinLength } from 'class-validator';

export function IsNickName() {
  return applyDecorators(
    ApiProperty({
      description: '사용자의 닉네임',
      maxLength: 20,
      minLength: 4,
      example: 'John Doe',
    }),
    MaxLength(20, { message: '닉네임은 20자 이내로 입력해주세요.' }),
    MinLength(4, { message: '닉네임은 4자 이상으로 입력해주세요.' }),
  );
}

export function IsUserEmail() {
  return applyDecorators(
    ApiProperty({
      description: '사용자의 이메일 주소',
      maxLength: 50,
      minLength: 10,
      example: 'john@example.com',
    }),
    IsEmail(),
    MaxLength(50, { message: '이메일 주소는 50자 이내로 입력해주세요.' }),
    MinLength(10, { message: '이메일 주소는 10자 이상으로 입력해주세요.' }),
  );
}

export function IsAddress() {
  return applyDecorators(
    ApiProperty({
      description: '사용자의 주소',
      maxLength: 100,
      minLength: 10,
      example: 'Seoul, Korea',
    }),
    MaxLength(100, { message: '주소는 100자 이내로 입력해주세요.' }),
    MinLength(10, { message: '주소는 10자 이상으로 입력해주세요.' }),
  );
}

export function IsUserPhoneNumber() {
  return applyDecorators(
    ApiProperty({
      description:
        '사용자의 전화번호(하이픈(-) 포함), ex) 10-1234-5678, 010-1234-5678',
      maxLength: 20,
      minLength: 10,
      example: '10-1234-5678',
    }),
    MaxLength(20, { message: '전화번호는 20자 이내로 입력해주세요.' }),
    MinLength(10, { message: '전화번호는 10자 이상으로 입력해주세요.' }),
    Matches(/^(\d{2,3})-(\d{4})-(\d{4})$/, {
      message: '전화번호 형식이 올바르지 않습니다.',
    }),
  );
}

export function IsPassword() {
  return applyDecorators(
    ApiProperty({
      description: '사용자의 비밀번호',
      maxLength: 20,
      minLength: 10,
      example: 'Password1!',
    }),
    MaxLength(20, { message: '비밀번호는 20자 이내로 입력해주세요.' }),
    MinLength(10, { message: '비밀번호는 10자 이상으로 입력해주세요.' }),
    Matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{10,20}$/,
      {
        message: '비밀번호는 영문, 대숫자, 소문자, 특수문자를 포함해야 합니다.',
      },
    ),
  );
}
