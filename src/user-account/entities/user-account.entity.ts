import { ObjectId } from 'mongodb';
import { Column, Entity, Index } from 'typeorm';
import { COLUMN_NAME } from '../../shared/constants/database.constants';
import { Email } from '../../shared/models/email.model';
import { Nickname } from '../../shared/models/nickname.model';
import { PhoneNumber } from '../../shared/models/phone-number.model';
import { Address } from '../../shared/models/address.model';
import { Introduction } from '../../shared/models/introduction.model';
import { HashedPassword } from '../../shared/models/hash-password.model';
import {
  EntityAddress,
  EntityEmail,
  EntityHashedPassword,
  EntityIntroduction,
  EntityNickname,
  EntityPhoneNumber,
  EntityPrimaryId,
} from '../../shared/decorators/entity.decorator';

@Entity({ name: 'user_account' })
export class UserAccount {
  @EntityPrimaryId()
  id: ObjectId;

  @Index('user_account_email_unique', { unique: true })
  @EntityEmail()
  email: Email;

  @EntityHashedPassword()
  hashedPassword: HashedPassword;

  @EntityNickname()
  nickname: Nickname;

  @EntityPhoneNumber()
  phoneNumber: PhoneNumber;

  @EntityAddress()
  address: Address;

  @EntityIntroduction()
  introduction: Introduction;

  @Column({ default: false })
  deleted: boolean;

  @Column({ name: COLUMN_NAME.IS_ACTIVE, default: false })
  isActive: boolean;

  @Column({ name: COLUMN_NAME.CREATED_AT })
  createdAt: Date;

  @Column({ name: COLUMN_NAME.UPDATED_AT })
  updatedAt: Date;
}
