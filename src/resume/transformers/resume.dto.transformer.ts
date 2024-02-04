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
  static from(
    request: ResumeRegisterRequestDto,
    userAccountId: ObjectId,
  ): ResumeRegisterData {
    return {
      userAccountId: userAccountId,
      name: new ResumeName(request.name),
      email: new Email(request.email),
      phoneNumber: new PhoneNumber(request.phoneNumber),
      address: new Address(request.address),
      occupation: new ResumeOccupation(request.occupation),
      briefIntroduction: new BriefIntroduction(request.briefIntroduction),
      profileImageId: new ObjectId(request.profileImageId),
      portfolioFileIds: request.portfolioFileIds?.map((id) => new ObjectId(id)),
      portfolioLinks: request.portfolioLinks?.map((link) => new Link(link)),
      technicalSkillIds: request.technicalSkillIds?.map(
        (id) => new ObjectId(id),
      ),
      projectExperiences: request.projectExperiences?.map(
        (projectExperience) => {
          return ProjectExperienceDataTransformer.from(projectExperience);
        },
        [],
      ),
      workExperiences: request.workExperiences?.map((workExperience) => {
        return WorkExperienceDataTransformer.from(workExperience);
      }, []),
      fieldOfInterestIds: request.fieldOfInterestIds.map(
        (id) => new ObjectId(id),
      ),
    };
  }
}

export class ProjectExperienceDataTransformer {
  static from(data: ProjectExperienceRequestDto): ProjectExperienceData {
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
  static from(data: WorkExperienceRequestDto): WorkExperienceData {
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
