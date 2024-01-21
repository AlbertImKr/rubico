import { ObjectId } from 'mongodb';
import { Column, Entity } from 'typeorm';
import { COLUMN_NAME } from '../../shared/constants/database.constants';
import { Address } from '../../shared/models/address.model';
import { Email } from '../../shared/models/email.model';
import { PhoneNumber } from '../../shared/models/phone-number.model';
import {
  EntityAddress,
  EntityEmail,
  EntityPhoneNumber,
  EntityPrimaryId,
  EntityRelationId,
} from '../../shared/decorators/entity.decorator';

@Entity({ name: 'resume' })
export class Resume {
  @EntityPrimaryId()
  id: ObjectId;

  @EntityRelationId()
  userAccountId: ObjectId;

  @EntityAddress()
  address: Address;

  brief_introduction: string;

  @EntityEmail()
  email: Email;

  name: string;

  occupation: string;

  @EntityPhoneNumber()
  phoneNumber: PhoneNumber;

  @EntityRelationId()
  profileImageId: ObjectId;

  @Column({ name: COLUMN_NAME.CREATED_AT })
  createdAt: Date;

  @Column({ name: COLUMN_NAME.UPDATED_AT })
  updatedAt: Date;
}
