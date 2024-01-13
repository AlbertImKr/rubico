import { ObjectId } from 'mongodb';
import { Address } from '../models/address.model';
import { Email } from '../models/email.model';
import { Nickname } from '../models/nickname.model';
import { Password } from '../models/password.model';
import { PhoneNumber } from '../models/phone-number.model';
import { TestConstants } from './test.constants';
import { UserAccount } from '../../user-account/entities/user-account.entity';

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
  static readonly id: ObjectId = new ObjectId();
  static readonly createdAt: Date = new Date(2021, 1, 1);
  static readonly userAccount: UserAccount = this.createTestUserAccount();

  static createTestUserAccount(): UserAccount {
    const userAccount = new UserAccount();
    return Object.assign(userAccount, {
      id: TestUtils.id,
      createdAt: TestUtils.createdAt,
      nickname: TestUtils.nickname,
      email: TestUtils.email,
      address: TestUtils.address,
      phoneNumber: TestUtils.phoneNumber,
      password: TestUtils.password,
    });
  }
}
