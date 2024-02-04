import { ObjectId } from 'mongodb';
import { Address } from '../../shared/models/address.model';
import { BriefIntroduction } from '../../shared/models/brief-Introduction.model';
import { Email } from '../../shared/models/email.model';
import { ResumeName } from '../../shared/models/resume-name.model';
import { ResumeOccupation } from '../../shared/models/resume-occupation.model';
import { PhoneNumber } from '../../shared/models/phone-number.model';
import { ProfileImage } from './profile_image.domain';
import { InterestField } from './field_of_interest.domain';
import { TechnicalSkill } from './technical_skill.domain';
import { WorkExperience } from './work_experience.domain';
import { ProjectExperience } from './project_experience.domain';
import { PortfolioLink } from './portfolio_link.domain';
import { PortfolioFile } from './portfolio_file.domain';

export class Resume {
  id: ObjectId;

  userAccountId: ObjectId;

  address: Address;

  briefIntroduction: BriefIntroduction;

  email: Email;

  name: ResumeName;

  occupation: ResumeOccupation;

  phoneNumber: PhoneNumber;

  profileImage: ProfileImage;

  portfolioFiles: PortfolioFile[];

  portfolioLinks: PortfolioLink[];

  projectExperiences: ProjectExperience[];

  interestsFields: InterestField[];

  technicalSkills: TechnicalSkill[];

  workExperiences: WorkExperience[];

  deletedAt?: Date;

  createdAt: Date;

  updatedAt: Date;
}
