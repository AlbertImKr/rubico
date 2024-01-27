import { ObjectId } from 'mongodb';
import { Address } from '../../shared/models/address.model';
import { BriefIntroduction } from '../../shared/models/brief-Introduction.model';
import { Email } from '../../shared/models/email.model';
import { PhoneNumber } from '../../shared/models/phone-number.model';
import { ResumeName } from '../../shared/models/resume-name.model';
import { ResumeOccupation } from '../../shared/models/resume-occupation.model';
import { Link } from '../../shared/models/link.model';
import { ProjectName } from '../../shared/models/project-name.model';
import { OrganizationName } from '../../shared/models/organization-name.model';
import { ProcessStatus } from '../enums/process-status.enum';
import { ProjectDescription } from '../../shared/models/project-description.model';
import { CompanyName } from '../../shared/models/company-name.model';
import { Department } from '../../shared/models/department.model';
import { WorkExperienceDescription } from '../../shared/models/work-experience-description.model';
import { EmploymentType } from '../enums/employment-type.enum';
import { WorkPosition } from '../../shared/models/work-position.model';

export class ResumeRegisterData {
  readonly userAccountId: ObjectId;
  readonly name: ResumeName;
  readonly email: Email;
  readonly phoneNumber: PhoneNumber;
  readonly address: Address;
  readonly occupation: ResumeOccupation;
  readonly briefIntroduction: BriefIntroduction;
  readonly profileImageId: ObjectId;
  readonly portfolioFileIds: ObjectId[];
  readonly portfolioLinks: Link[];
  readonly technicalSkillIds: ObjectId[];
  readonly projectExperiences: ProjectExperienceData[];
  readonly workExperiences: WorkExperienceData[];
  readonly fieldOfInterestIds: ObjectId[];
}

export class ProjectExperienceData {
  readonly projectName: ProjectName;
  readonly organizationName: OrganizationName;
  readonly processStatus: ProcessStatus;
  readonly projectDescription: ProjectDescription;
  readonly startedAt: Date;
  readonly endedAt: Date;
}

export class WorkExperienceData {
  readonly companyName: CompanyName;
  readonly department: Department;
  readonly description: WorkExperienceDescription;
  readonly employmentType: EmploymentType;
  readonly position: WorkPosition;
  readonly startedAt: Date;
  readonly endedAt: Date;
}
