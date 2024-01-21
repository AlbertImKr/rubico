import { ObjectId } from 'mongodb';
import { Column, Entity } from 'typeorm';
import { COLUMN_NAME } from '../../shared/constants/database.constants';
import { Address } from '../../shared/models/address.model';
import { Email } from '../../shared/models/email.model';
import { PhoneNumber } from '../../shared/models/phone-number.model';
import {
  EntityAddress,
  EntityBriefIntroduction,
  EntityEmail,
  EntityPhoneNumber,
  EntityPrimaryId,
  EntityRelationId,
  EntityResumeName,
} from '../../shared/decorators/entity.decorator';
import { BriefIntroduction } from '../../shared/models/brief-Introduction.model';
import { ResumeName } from '../../shared/models/resume-name.model';

@Entity({ name: 'resume' })
export class Resume {
  @EntityPrimaryId()
  id: ObjectId;

  @EntityRelationId()
  userAccountId: ObjectId;

  @EntityAddress()
  address: Address;

  @EntityBriefIntroduction()
  briefIntroduction: BriefIntroduction;

  @EntityEmail()
  email: Email;

  @EntityResumeName()
  name: ResumeName;

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
