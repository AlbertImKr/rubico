import { ObjectId } from 'mongodb';
import { Column, Entity, Index, PrimaryColumn } from 'typeorm';
import {
  COLUMN_NAME,
  COLUMN_TYPE,
  ID_LENGTH,
} from '../../shared/constants/database.constants';
import { Email } from '../../shared/models/email.model';
import { Nickname } from '../../shared/models/nickname.model';
import { PhoneNumber } from '../../shared/models/phone-number.model';
import { Address } from '../../shared/models/address.model';
import { Introduction } from '../../shared/models/introduction.model';
import { HashedPassword } from '../../shared/models/hash-password.model';

@Entity({ name: 'user_account' })
export class UserAccount {
  @PrimaryColumn({
    type: COLUMN_TYPE.CHAR,
    length: ID_LENGTH,
    transformer: {
      to: (value: ObjectId) => value.toHexString(),
      from: (value: string) => new ObjectId(value),
    },
  })
  id: ObjectId;
  @Index('user_account_email_unique', { unique: true })
  @Column({
    type: COLUMN_TYPE.VARCHAR,
    transformer: {
      to: (value: Email) => value.value,
      from: (value: string) => new Email(value),
    },
    unique: true,
  })
  email: Email;
  @Column({
    type: COLUMN_TYPE.VARCHAR,
    transformer: {
      to: (value: HashedPassword) => value.value,
      from: (value: string) => new HashedPassword(value),
    },
  })
  hashedPassword: HashedPassword;
  @Column({
    type: COLUMN_TYPE.VARCHAR,
    transformer: {
      to: (value: Nickname) => value.value,
      from: (value: string) => new Nickname(value),
    },
  })
  nickname: Nickname;
  @Column({
    type: COLUMN_TYPE.VARCHAR,
    transformer: {
      to: (value: PhoneNumber) => value.value,
      from: (value: string) => new PhoneNumber(value),
    },
  })
  phoneNumber: PhoneNumber;
  @Column({
    type: COLUMN_TYPE.VARCHAR,
    transformer: {
      to: (value: Address) => value.value,
      from: (value: string) => new Address(value),
    },
  })
  address: Address;
  @Column({
    type: COLUMN_TYPE.VARCHAR,
    transformer: {
      to: (value: Introduction) => value?.value ?? '',
      from: (value: string) => (value ? new Introduction(value) : null),
    },
  })
  introduction: Introduction;
  @Column({ name: COLUMN_NAME.IS_ACTIVE, default: false })
  isActive: boolean;
  @Column({ name: COLUMN_NAME.CREATED_AT })
  createdAt: Date;
  @Column({ name: COLUMN_NAME.UPDATED_AT })
  updatedAt: Date;
}
