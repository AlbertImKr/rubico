export class TestConstants {
  // User Account
  static readonly USER_ID = '60b9b0b9c9b7d1b4e8b0b0b0';
  static readonly USER_NICKNAME = 'test';
  static readonly EDIT_USER_NICKNAME = 'edit-test';
  static readonly USER_INTRODUCTION = '안녕하세요';
  static readonly EDIT_USER_INTRODUCTION = '반갑습니다';
  static readonly USER_ADDRESS = '인천광역시 연수구';
  static readonly EDIT_USER_ADDRESS = '인천광역시 남동구';
  static readonly USER_PASSWORD = 'Password123!';
  static readonly DIFFERENT_PASSWORD = 'Password1234!';
  static readonly HASHED_PASSWORD =
    '$2b$10$Y8qTPhw/Rsp9hsTagMdcueAsxk0CvpKNtB2wK7cRmyv9OlSUC7wCG';
  static readonly USER_PHONE_NUMBER = '010-1234-5678';
  static readonly USER_EMAIL = 'test@emial.com';
  static readonly ACCESS_TOKEN = 'access-token';
  static readonly REFRESH_TOKEN = 'refresh-token';
  static readonly CREATED_AT_YEAR = 2021;
  static readonly CREATED_AT_MONTH = 1;
  static readonly CREATED_AT_DATE = 1;

  // Profile Image
  static readonly PROFILE_IMAGE_NAME = 'test.jpg';
  static readonly PROFILE_IMAGE_URL =
    'https://test-bucket.s3.ap-northeast-2.amazonaws.com/test.jpg';
  static readonly PROFILE_IMAGE_FILE_FIELD_NAME = 'image';
  static readonly PROFILE_IMAGE_FILE_MIME_TYPE = 'image/jpeg';
  static readonly PROFILE_IMAGE_FILE_SIZE = 100;
  static readonly PROFILE_IMAGE_FILE_BUFFER = Buffer.from('');
  static readonly PROFILE_IMAGE_FILE_ENCODING = '7bit';
  static readonly PROFILE_IMAGE_FILE_DESTINATION = '';
  static readonly PROFILE_IMAGE_FILE_FILENAME = '';
  static readonly PROFILE_IMAGE_FILE_PATH =
    __dirname + '/../../../test/assets/test-image.png';
  static readonly PROFILE_IMAGE_ID = '60b9b0b9c9b7d1b4e8b0b0b0';

  // Resume
  static readonly RESUME_NAME = '이력서';
  static readonly RESUME_EMAIL = 'test@email.com';
  static readonly RESUME_PHONE_NUMBER = '010-1234-5678';
  static readonly RESUME_ADDRESS = '인천광역시 연수구';
  static readonly RESUME_OCCUPATION = '백엔드 개발자';
  static readonly RESUME_BRIEF_INTRODUCTION = '안녕하세요';

  // Field Of Interest
  static readonly FIELD_OF_INTEREST_IDS = [
    '60b9b0b9c9b7d1b4e8b0b0b0',
    '60b9b0b9c9b7d1b4e8b0b0b1',
    '60b9b0b9c9b7d1b4e8b0b0b2',
  ];
}
