import { ObjectId } from 'mongodb';
import { Nickname } from '../../shared/models/nickname.model';
import { Address } from '../../shared/models/address.model';
import { Introduction } from '../../shared/models/introduction.model';
import { HashedPassword } from '../../shared/models/hash-password.model';
import { Email } from '../../shared/models/email.model';
import { PhoneNumber } from '../../shared/models/phone-number.model';
import { Password } from '../../shared/models/password.model';

export class EditUserInfoData {
  readonly userId: ObjectId;
  readonly nickname: Nickname;
  readonly address: Address;
  readonly introduction?: Introduction;
}

export class GenerateUserAccountData {
  readonly email: Email;
  readonly nickname: Nickname;
  readonly hashedPassword: HashedPassword;
  readonly address: Address;
  readonly phoneNumber: PhoneNumber;
}

export class EditUserPasswordData {
  readonly userId: ObjectId;
  readonly password: Password;
  readonly newPassword: Password;
}
