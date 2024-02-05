import { ObjectId } from 'mongodb';
import { Address } from '../models/address.model';
import { Email } from '../models/email.model';
import { Nickname } from '../models/nickname.model';
import { Password } from '../models/password.model';
import { PhoneNumber } from '../models/phone-number.model';
import { TestConstants } from './test.constants';
import { UserAccount } from '../../user-account/entities/user-account.entity';
import { DataSource, EntityManager } from 'typeorm';
import { Introduction } from '../models/introduction.model';
import { HashedPassword } from '../models/hash-password.model';
import { GenerateUserAccountData } from '../../user-account/dto/user-account.data.dto';
import { ResumeRegisterRequestDto } from '../../resume/dto/resume.request.dto';
import { LoginUserData } from '../../auth/dto/auth.data.dto';
import { ResumeRegisterDataTransformer } from '../../resume/transformers/resume.dto.transformer';
import { ResumeRegisterData } from '../../resume/dto/resume.data.dto';
import { IdResponse } from '../utils/response.dto';

export class TestUtils {
  static readonly nickname: Nickname = new Nickname(
    TestConstants.USER_NICKNAME,
  );
  static readonly password: Password = new Password(
    TestConstants.USER_PASSWORD,
  );
  static readonly differentPassword: Password = new Password(
    TestConstants.DIFFERENT_PASSWORD,
  );
  static readonly email: Email = new Email(TestConstants.USER_EMAIL);
  static readonly address: Address = new Address(TestConstants.USER_ADDRESS);
  static readonly phoneNumber: PhoneNumber = new PhoneNumber(
    TestConstants.USER_PHONE_NUMBER,
  );
  static readonly hashedPassword: HashedPassword = new HashedPassword(
    TestConstants.HASHED_PASSWORD,
  );
  static readonly id: ObjectId = new ObjectId();
  static readonly createdAt: Date = new Date(
    TestConstants.CREATED_AT_YEAR,
    TestConstants.CREATED_AT_MONTH,
    TestConstants.CREATED_AT_DATE,
  );

  static readonly editUserNickname: Nickname = new Nickname(
    TestConstants.EDIT_USER_NICKNAME,
  );
  static readonly editUserAddress: Address = new Address(
    TestConstants.EDIT_USER_ADDRESS,
  );
  static readonly editUserIntroduction: Introduction = new Introduction(
    TestConstants.EDIT_USER_INTRODUCTION,
  );

  static createTestUserAccount(): UserAccount {
    const userAccount = new UserAccount();
    return Object.assign(userAccount, {
      id: TestUtils.id,
      createdAt: TestUtils.createdAt,
      nickname: TestUtils.nickname,
      email: TestUtils.email,
      address: TestUtils.address,
      phoneNumber: TestUtils.phoneNumber,
      hashedPassword: TestUtils.hashedPassword,
    });
  }
  static readonly userAccount: UserAccount = this.createTestUserAccount();

  static readonly generateUserAccountData: GenerateUserAccountData = {
    email: TestUtils.email,
    nickname: TestUtils.nickname,
    hashedPassword: TestUtils.hashedPassword,
    address: TestUtils.address,
    phoneNumber: TestUtils.phoneNumber,
  };

  static readonly profileImageFile: Express.Multer.File = {
    fieldname: TestConstants.PROFILE_IMAGE_FILE_FIELD_NAME,
    originalname: TestConstants.PROFILE_IMAGE_NAME,
    encoding: TestConstants.PROFILE_IMAGE_FILE_ENCODING,
    mimetype: TestConstants.PROFILE_IMAGE_FILE_MIME_TYPE,
    size: TestConstants.PROFILE_IMAGE_FILE_SIZE,
    stream: null,
    destination: TestConstants.PROFILE_IMAGE_FILE_DESTINATION,
    filename: TestConstants.PROFILE_IMAGE_FILE_FILENAME,
    path: TestConstants.PROFILE_IMAGE_FILE_PATH,
    buffer: TestConstants.PROFILE_IMAGE_FILE_BUFFER,
  };

  static readonly resumeRegisterRequest: ResumeRegisterRequestDto = {
    name: TestConstants.RESUME_NAME,
    email: TestConstants.RESUME_EMAIL,
    phoneNumber: TestConstants.RESUME_PHONE_NUMBER,
    address: TestConstants.RESUME_ADDRESS,
    occupation: TestConstants.RESUME_OCCUPATION,
    briefIntroduction: TestConstants.RESUME_BRIEF_INTRODUCTION,
    profileImageId: TestConstants.PROFILE_IMAGE_ID,
    fieldOfInterestIds: TestConstants.FIELD_OF_INTEREST_IDS,
  };

  static readonly loginUserData: LoginUserData = {
    id: this.id,
    nickname: this.nickname,
  };

  static readonly resumeRegisterData: ResumeRegisterData =
    ResumeRegisterDataTransformer.from(
      this.resumeRegisterRequest,
      this.loginUserData.id,
    );

  static readonly idResponse: IdResponse = { id: TestUtils.id.toHexString() };

  static readonly profileImage: Express.Multer.File = {
    fieldname: TestConstants.PROFILE_IMAGE_FILE_FIELD_NAME,
    originalname: TestConstants.PROFILE_IMAGE_NAME,
    encoding: TestConstants.PROFILE_IMAGE_FILE_ENCODING,
    mimetype: TestConstants.PROFILE_IMAGE_FILE_MIME_TYPE,
    size: TestConstants.PROFILE_IMAGE_FILE_SIZE,
    stream: null,
    destination: TestConstants.PROFILE_IMAGE_FILE_DESTINATION,
    filename: TestConstants.PROFILE_IMAGE_FILE_FILENAME,
    path: TestConstants.PROFILE_IMAGE_FILE_PATH,
    buffer: TestConstants.PROFILE_IMAGE_FILE_BUFFER,
  };

  static readonly portfolioFile: Express.Multer.File = {
    fieldname: TestConstants.PORTFOLIO_FILE_FIELD_NAME,
    originalname: TestConstants.PORTFOLIO_FILE_NAME,
    encoding: TestConstants.PORTFOLIO_FILE_ENCODING,
    mimetype: TestConstants.PORTFOLIO_FILE_MIME_TYPE,
    size: TestConstants.PORTFOLIO_FILE_SIZE,
    stream: null,
    destination: TestConstants.PORTFOLIO_FILE_DESTINATION,
    filename: TestConstants.PORTFOLIO_FILE_FILENAME,
    path: TestConstants.PORTFOLIO_FILE_PATH,
    buffer: TestConstants.PORTFOLIO_FILE_BUFFER,
  };
}

export const mockEntityManager: EntityManager = jest
  .fn()
  .mockImplementation(() => ({
    save: jest.fn(),
    findOneBy: jest.fn(),
    create: jest.fn(),
  }))();

export const mockQueryRunner = jest.fn().mockImplementation(() => ({
  connect: jest.fn(),
  startTransaction: jest.fn(),
  release: jest.fn(),
  commitTransaction: jest.fn(),
  rollbackTransaction: jest.fn(),
  manager: mockEntityManager,
}))();

export const mockDataSource = {
  createQueryRunner: jest.fn().mockReturnValue(mockQueryRunner),
};

export const MockDataSourceProvider = {
  provide: DataSource,
  useValue: mockDataSource,
};
