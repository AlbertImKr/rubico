import { applyDecorators } from '@nestjs/common';
import { Column, PrimaryColumn } from 'typeorm';
import { COLUMN_TYPE, ID_LENGTH } from '../constants/database.constants';
import { Email } from '../models/email.model';
import { HashedPassword } from '../models/hash-password.model';
import { Nickname } from '../models/nickname.model';
import { PhoneNumber } from '../models/phone-number.model';
import { Address } from '../models/address.model';
import { Introduction } from '../models/introduction.model';
import { ObjectId } from 'mongodb';

export function EntityPrimaryId() {
  return applyDecorators(
    PrimaryColumn({
      type: COLUMN_TYPE.CHAR,
      length: ID_LENGTH,
      transformer: {
        to: (value: ObjectId) => value.toHexString(),
        from: (value: string) => new ObjectId(value),
      },
    }),
  );
}

export function EntityRelationId() {
  return applyDecorators(
    Column({
      type: COLUMN_TYPE.CHAR,
      length: ID_LENGTH,
      transformer: {
        to: (value: ObjectId) => value.toHexString(),
        from: (value: string) => new ObjectId(value),
      },
    }),
  );
}

export function EntityEmail() {
  return applyDecorators(
    Column({
      type: COLUMN_TYPE.VARCHAR,
      transformer: {
        to: (value: Email) => value.value,
        from: (value: string) => new Email(value),
      },
      unique: true,
    }),
  );
}

export function EntityHashedPassword() {
  return applyDecorators(
    Column({
      type: COLUMN_TYPE.VARCHAR,
      transformer: {
        to: (value: HashedPassword) => value.value,
        from: (value: string) => new HashedPassword(value),
      },
    }),
  );
}

export function EntityNickname() {
  return applyDecorators(
    Column({
      type: COLUMN_TYPE.VARCHAR,
      transformer: {
        to: (value: Nickname) => value.value,
        from: (value: string) => new Nickname(value),
      },
    }),
  );
}

export function EntityPhoneNumber() {
  return applyDecorators(
    Column({
      type: COLUMN_TYPE.VARCHAR,
      transformer: {
        to: (value: PhoneNumber) => value.value,
        from: (value: string) => new PhoneNumber(value),
      },
    }),
  );
}

export function EntityAddress() {
  return applyDecorators(
    Column({
      type: COLUMN_TYPE.VARCHAR,
      transformer: {
        to: (value: Address) => value.value,
        from: (value: string) => new Address(value),
      },
    }),
  );
}

export function EntityIntroduction() {
  return applyDecorators(
    Column({
      type: COLUMN_TYPE.VARCHAR,
      transformer: {
        to: (value: Introduction) => value?.value ?? '',
        from: (value: string) => (value ? new Introduction(value) : null),
      },
    }),
  );
}
