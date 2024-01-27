import { ObjectId } from 'mongodb';
import { Address } from '../../shared/models/address.model';
import { BriefIntroduction } from '../../shared/models/brief-Introduction.model';
import { Email } from '../../shared/models/email.model';
import { PhoneNumber } from '../../shared/models/phone-number.model';
import { ResumeName } from '../../shared/models/resume-name.model';
import { ResumeOccupation } from '../../shared/models/resume-occupation.model';
import {
  ProjectExperienceData,
  ResumeRegisterData,
  WorkExperienceData,
} from '../dto/resume.data.dto';
import {
  ProjectExperienceRequestDto,
  ResumeRegisterRequestDto,
  WorkExperienceRequestDto,
} from '../dto/resume.request.dto';
import { Link } from '../../shared/models/link.model';
import { ProjectName } from '../../shared/models/project-name.model';
import { OrganizationName } from '../../shared/models/organization-name.model';
import { ProjectDescription } from '../../shared/models/project-description.model';
import { ProcessStatus } from '../enums/process-status.enum';
import { CompanyName } from '../../shared/models/company-name.model';
import { Department } from '../../shared/models/department.model';
import { WorkExperienceDescription } from '../../shared/models/work-experience-description.model';
import { EmploymentType } from '../enums/employment-type.enum';
import { WorkPosition } from '../../shared/models/work-position.model';

export class ResumeRegisterDataTransformer {
  static transform(
    data: ResumeRegisterRequestDto,
    userAccountId: ObjectId,
  ): ResumeRegisterData {
    return {
      userAccountId: userAccountId,
      name: new ResumeName(data.name),
      email: new Email(data.email),
      phoneNumber: new PhoneNumber(data.phoneNumber),
      address: new Address(data.address),
      occupation: new ResumeOccupation(data.occupation),
      briefIntroduction: new BriefIntroduction(data.briefIntroduction),
      profileImageId: new ObjectId(data.profileImageId),
      portfolioFileIds: data.portfolioFileIds?.map((id) => new ObjectId(id)),
      portfolioLinks: data.portfolioLinks?.map((link) => new Link(link)),
      technicalSkillIds: data.technicalSkillIds?.map((id) => new ObjectId(id)),
      projectExperiences: data.projectExperiences?.map((projectExperience) => {
        return ProjectExperienceDataTransformer.transform(projectExperience);
      }, []),
      workExperiences: data.workExperiences?.map((workExperience) => {
        return WorkExperienceDataTransformer.transform(workExperience);
      }, []),
      fieldOfInterestIds: data.fieldOfInterestIds.map((id) => new ObjectId(id)),
    };
  }
}

export class ProjectExperienceDataTransformer {
  static transform(data: ProjectExperienceRequestDto): ProjectExperienceData {
    return {
      projectName: new ProjectName(data.projectName),
      organizationName: new OrganizationName(data.organizationName),
      processStatus: data.processStatus as ProcessStatus,
      projectDescription: new ProjectDescription(data.projectDescription),
      startedAt: data.startedAt,
      endedAt: data.endedAt,
    };
  }
}

export class WorkExperienceDataTransformer {
  static transform(data: WorkExperienceRequestDto): WorkExperienceData {
    return {
      companyName: new CompanyName(data.companyName),
      department: new Department(data.department),
      description: new WorkExperienceDescription(data.description),
      employmentType: data.employmentType as EmploymentType,
      position: new WorkPosition(data.position),
      startedAt: data.startedAt,
      endedAt: data.endedAt,
    };
  }
}
