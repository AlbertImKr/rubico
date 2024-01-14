import { ObjectId } from 'mongodb';
import { Address } from '../models/address.model';
import { Email } from '../models/email.model';
import { Nickname } from '../models/nickname.model';
import { Password } from '../models/password.model';
import { PhoneNumber } from '../models/phone-number.model';
import { TestConstants } from './test.constants';
import { UserAccount } from '../../user-account/entities/user-account.entity';
import { DataSource } from 'typeorm';
import { Introduction } from '../models/introduction.model';
import { HashedPassword } from '../models/hash-password.model';
import { GenerateUserAccountData } from '../../user-account/dto/user-account.data.dto';

export class TestUtils {
  static readonly nickname: Nickname = new Nickname(
    TestConstants.USER_NICKNAME,
  );
  static readonly password: Password = new Password(
    TestConstants.USER_PASSWORD,
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
  static readonly createdAt: Date = new Date(2021, 1, 1);

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

  static generateUserAccountData(): GenerateUserAccountData {
    return {
      email: TestUtils.email,
      nickname: TestUtils.nickname,
      hashedPassword: TestUtils.hashedPassword,
      address: TestUtils.address,
      phoneNumber: TestUtils.phoneNumber,
    };
  }
}

export const mockDataSource = {
  createQueryRunner: jest.fn().mockImplementation(() => ({
    connect: jest.fn(),
    startTransaction: jest.fn(),
    release: jest.fn(),
    commitTransaction: jest.fn(),
    rollbackTransaction: jest.fn(),
    manager: {
      save: jest.fn(),
    },
  })),
};

export const mockDataSourceProvider = {
  provide: DataSource,
  useValue: mockDataSource,
};
