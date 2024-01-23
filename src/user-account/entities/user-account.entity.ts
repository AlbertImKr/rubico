import { ObjectId } from 'mongodb';
import { Entity } from 'typeorm';
import { Email } from '../../shared/models/email.model';
import { Nickname } from '../../shared/models/nickname.model';
import { PhoneNumber } from '../../shared/models/phone-number.model';
import { Address } from '../../shared/models/address.model';
import { Introduction } from '../../shared/models/introduction.model';
import { HashedPassword } from '../../shared/models/hash-password.model';
import {
  EntityAddress,
  EntityCreatedAt,
  EntityDeleted,
  EntityEmail,
  EntityHashedPassword,
  EntityIntroduction,
  EntityIsActive,
  EntityNickname,
  EntityPhoneNumber,
  EntityPrimaryId,
  EntityUpdatedAt,
  UniqueUserAccountEmailIndex,
} from '../../shared/decorators/entity.decorator';

@Entity({ name: 'user_account' })
export class UserAccount {
  @EntityPrimaryId()
  id: ObjectId;

  @UniqueUserAccountEmailIndex()
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

  @EntityDeleted()
  deleted: boolean;

  @EntityIsActive()
  isActive: boolean;

  @EntityCreatedAt()
  createdAt: Date;

  @EntityUpdatedAt()
  updatedAt: Date;
}
