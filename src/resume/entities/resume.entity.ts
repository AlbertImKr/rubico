import { ObjectId } from 'mongodb';
import { Column, Entity, PrimaryColumn } from 'typeorm';
import {
  COLUMN_NAME,
  COLUMN_TYPE,
  ID_LENGTH,
} from '../../shared/constants/database.constants';
import { Address } from '../../shared/models/address.model';
import { Email } from '../../shared/models/email.model';
import { PhoneNumber } from '../../shared/models/phone-number.model';

@Entity({ name: 'resume' })
export class Resume {
  @PrimaryColumn({
    type: COLUMN_TYPE.CHAR,
    length: ID_LENGTH,
    transformer: {
      to: (value: ObjectId) => value.toHexString(),
      from: (value: string) => new ObjectId(value),
    },
  })
  id: ObjectId;

  @Column({
    type: COLUMN_TYPE.CHAR,
    length: ID_LENGTH,
    transformer: {
      to: (value: ObjectId) => value.toHexString(),
      from: (value: string) => new ObjectId(value),
    },
  })
  userAccountId: ObjectId;

  @Column({
    type: COLUMN_TYPE.VARCHAR,
    transformer: {
      to: (value: Address) => value.value,
      from: (value: string) => new Address(value),
    },
  })
  address: Address;

  brief_introduction: string;

  @Column({
    type: COLUMN_TYPE.VARCHAR,
    transformer: {
      to: (value: Email) => value.value,
      from: (value: string) => new Email(value),
    },
    unique: true,
  })
  email: Email;

  name: string;

  occupation: string;

  @Column({
    type: COLUMN_TYPE.VARCHAR,
    transformer: {
      to: (value: PhoneNumber) => value.value,
      from: (value: string) => new PhoneNumber(value),
    },
  })
  phoneNumber: PhoneNumber;

  @Column({
    type: COLUMN_TYPE.CHAR,
    length: ID_LENGTH,
    transformer: {
      to: (value: ObjectId) => value.toHexString(),
      from: (value: string) => new ObjectId(value),
    },
  })
  profileImageId: ObjectId;

  @Column({ name: COLUMN_NAME.CREATED_AT })
  createdAt: Date;
  @Column({ name: COLUMN_NAME.UPDATED_AT })
  updatedAt: Date;
}
