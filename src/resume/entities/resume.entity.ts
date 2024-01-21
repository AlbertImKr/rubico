import { ObjectId } from 'mongodb';
import { Entity } from 'typeorm';
import { Address } from '../../shared/models/address.model';
import { Email } from '../../shared/models/email.model';
import { PhoneNumber } from '../../shared/models/phone-number.model';
import {
  EntityAddress,
  EntityBriefIntroduction,
  EntityCreatedAt,
  EntityEmail,
  EntityPhoneNumber,
  EntityPrimaryId,
  EntityRelationId,
  EntityResumeName,
  EntityResumeOccupation,
  EntityUpdatedAt,
} from '../../shared/decorators/entity.decorator';
import { BriefIntroduction } from '../../shared/models/brief-Introduction.model';
import { ResumeName } from '../../shared/models/resume-name.model';
import { ResumeOccupation } from '../../shared/models/resume-occupation.model';

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

  @EntityResumeOccupation()
  occupation: ResumeOccupation;

  @EntityPhoneNumber()
  phoneNumber: PhoneNumber;

  @EntityRelationId()
  profileImageId: ObjectId;

  @EntityCreatedAt()
  createdAt: Date;

  @EntityUpdatedAt()
  updatedAt: Date;
}
