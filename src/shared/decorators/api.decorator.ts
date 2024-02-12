import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import {
  API_ADDRESS,
  API_INTRODUCTION,
  API_NICKNAME,
  API_PASSWORD,
  API_PROFILE_IMAGE_ID,
  API_PORTFOLIO_FILE_IDS,
  API_RESUME_BRIEF_INTRODUCTION,
  API_RESUME_OCCUPATION,
  API_USER_EMAIL,
  API_USER_PHONE_NUMBER,
  API_PORTFOLIO_LINKS,
  API_TECHNICAL_SKILL_IDS,
  API_PROJECT_NAME,
  API_ORGANIZATION_NAME,
  API_PROCESS_STATUS,
  API_PROJECT_DESCRIPTION,
  API_STARTED_AT,
  API_ENDED_AT,
  API_COMPANY_NAME,
  API_DEPARTMENT,
  API_WORK_EXPERIENCE_DESCRIPTION,
  API_EMPLOYMENT_TYPE,
  API_POSITION,
  API_FIELD_OF_INTEREST_IDS,
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

export function ApiPropertyOccupation() {
  return applyDecorators(
    ApiProperty({
      description: API_RESUME_OCCUPATION.DESCRIPTION,
      maxLength: API_RESUME_OCCUPATION.MAX_LENGTH,
      example: API_RESUME_OCCUPATION.EXAMPLE,
    }),
  );
}

export function ApiPropertyResumeBriefIntroduction() {
  return applyDecorators(
    ApiProperty({
      description: API_RESUME_BRIEF_INTRODUCTION.DESCRIPTION,
      maxLength: API_RESUME_BRIEF_INTRODUCTION.MAX_LENGTH,
      example: API_RESUME_BRIEF_INTRODUCTION.EXAMPLE,
    }),
  );
}

export function ApiPropertyProfileImageId() {
  return applyDecorators(
    ApiProperty({
      description: API_PROFILE_IMAGE_ID.DESCRIPTION,
      example: API_PROFILE_IMAGE_ID.EXAMPLE,
    }),
  );
}

export function ApiPropertyPortfolioFileIds() {
  return applyDecorators(
    ApiProperty({
      description: API_PORTFOLIO_FILE_IDS.DESCRIPTION,
      example: API_PORTFOLIO_FILE_IDS.EXAMPLE,
    }),
  );
}

export function ApiPropertyPortfolioLinks() {
  return applyDecorators(
    ApiProperty({
      description: API_PORTFOLIO_LINKS.DESCRIPTION,
      example: API_PORTFOLIO_LINKS.EXAMPLE,
    }),
  );
}

export function ApiPropertyTechnicalSkillIds() {
  return applyDecorators(
    ApiProperty({
      description: API_TECHNICAL_SKILL_IDS.DESCRIPTION,
      example: API_TECHNICAL_SKILL_IDS.EXAMPLE,
    }),
  );
}

export function ApiPropertyProjectName() {
  return applyDecorators(
    ApiProperty({
      description: API_PROJECT_NAME.DESCRIPTION,
      maxLength: API_PROJECT_NAME.MAX_LENGTH,
      minLength: API_PROJECT_NAME.MIN_LENGTH,
      example: API_PROJECT_NAME.EXAMPLE,
    }),
  );
}

export function ApiPropertyOrganizationName() {
  return applyDecorators(
    ApiProperty({
      description: API_ORGANIZATION_NAME.DESCRIPTION,
      maxLength: API_ORGANIZATION_NAME.MAX_LENGTH,
      minLength: API_ORGANIZATION_NAME.MIN_LENGTH,
      example: API_ORGANIZATION_NAME.EXAMPLE,
    }),
  );
}

export function ApiPropertyProcessStatus() {
  return applyDecorators(
    ApiProperty({
      description: API_PROCESS_STATUS.DESCRIPTION,
      example: API_PROCESS_STATUS.EXAMPLE,
    }),
  );
}

export function ApiPropertyProjectDescription() {
  return applyDecorators(
    ApiProperty({
      description: API_PROJECT_DESCRIPTION.DESCRIPTION,
      maxLength: API_PROJECT_DESCRIPTION.MAX_LENGTH,
      minLength: API_PROJECT_DESCRIPTION.MIN_LENGTH,
      example: API_PROJECT_DESCRIPTION.EXAMPLE,
    }),
  );
}

export function ApiPropertyStartedAt() {
  return applyDecorators(
    ApiProperty({
      description: API_STARTED_AT.DESCRIPTION,
      example: API_STARTED_AT.EXAMPLE,
    }),
  );
}

export function ApiPropertyEndedAt() {
  return applyDecorators(
    ApiProperty({
      description: API_ENDED_AT.DESCRIPTION,
      example: API_ENDED_AT.EXAMPLE,
    }),
  );
}

export function ApiPropertyCompanyName() {
  return applyDecorators(
    ApiProperty({
      description: API_COMPANY_NAME.DESCRIPTION,
      maxLength: API_COMPANY_NAME.MAX_LENGTH,
      minLength: API_COMPANY_NAME.MIN_LENGTH,
      example: API_COMPANY_NAME.EXAMPLE,
    }),
  );
}

export function ApiPropertyDepartment() {
  return applyDecorators(
    ApiProperty({
      description: API_DEPARTMENT.DESCRIPTION,
      maxLength: API_DEPARTMENT.MAX_LENGTH,
      minLength: API_DEPARTMENT.MIN_LENGTH,
      example: API_DEPARTMENT.EXAMPLE,
    }),
  );
}

export function ApiPropertyWorkExperienceDescription() {
  return applyDecorators(
    ApiProperty({
      description: API_WORK_EXPERIENCE_DESCRIPTION.DESCRIPTION,
      example: API_WORK_EXPERIENCE_DESCRIPTION.EXAMPLE,
    }),
  );
}

export function ApiPropertyEmploymentType() {
  return applyDecorators(
    ApiProperty({
      description: API_EMPLOYMENT_TYPE.DESCRIPTION,
      example: API_EMPLOYMENT_TYPE.EXAMPLE,
    }),
  );
}

export function ApiPropertyPosition() {
  return applyDecorators(
    ApiProperty({
      description: API_POSITION.DESCRIPTION,
      example: API_POSITION.EXAMPLE,
    }),
  );
}

export function ApiPropertyFieldOfInterestIds() {
  return applyDecorators(
    ApiProperty({
      description: API_FIELD_OF_INTEREST_IDS.DESCRIPTION,
      example: API_FIELD_OF_INTEREST_IDS.EXAMPLE,
    }),
  );
}
