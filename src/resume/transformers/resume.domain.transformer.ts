import { ObjectId } from 'mongodb';
import { InterestField } from '../domain/field_of_interest.domain';
import { InterestFieldEntity } from '../entities/field_of_interest.entity';
import { InterestFieldName } from '../model/Interest-field-name.model';
import { FieldOfWorkEntity } from '../entities/field_of_work.entity';
import { FieldOfWork } from '../domain/field_of_work.domain';
import { FieldOfWorkName } from '../model/field-of-work-name.model';
import { PortfolioFile } from '../domain/portfolio_file.domain';
import { PortfolioFileEntity } from '../entities/portfolio_file.entity';
import { Link } from '../../shared/models/link.model';
import { PortfolioLink } from '../domain/portfolio_link.domain';
import { PortfolioLinkEntity } from '../entities/portfolio_link.entity';
import { ProfileImage } from '../domain/profile_image.domain';
import { ProfileImageEntity } from '../entities/profile_image.entity';
import { ProfileImageName } from '../../shared/models/profile-image-name.model';
import { CustomMimeType } from '../types/mine-type.types';
import { ProjectExperience } from '../domain/project_experience.domain';
import { ProjectExperienceEntity } from '../entities/project_experience.entity';
import { OrganizationName } from '../../shared/models/organization-name.model';
import { ProjectDescription } from '../../shared/models/project-description.model';
import { ProjectName } from '../../shared/models/project-name.model';
import { ProcessStatus } from '../enums/process-status.enum';
import { TechnicalSkill } from '../domain/technical_skill.domain';
import { TechnicalSkillEntity } from '../entities/technical_skill.entity';
import { TechnicalSkillName } from '../model/technical-skill-name.model';
import { WorkExperienceEntity } from '../entities/work_experience.entity';
import { WorkExperience } from '../domain/work_experience.domain';
import { CompanyName } from '../../shared/models/company-name.model';
import { Department } from '../../shared/models/department.model';
import { WorkExperienceDescription } from '../../shared/models/work-experience-description.model';
import { WorkPosition } from '../../shared/models/work-position.model';
import { EmploymentType } from '../enums/employment-type.enum';
import { Resume } from '../domain/resume.domain';
import { ResumeEntity } from '../entities/resume.entity';
import { Address } from '../../shared/models/address.model';
import { BriefIntroduction } from '../../shared/models/brief-Introduction.model';
import { Email } from '../../shared/models/email.model';
import { ResumeName } from '../../shared/models/resume-name.model';
import { ResumeOccupation } from '../../shared/models/resume-occupation.model';
import { PhoneNumber } from '../../shared/models/phone-number.model';

export class InterestOfFieldTransformer {
  static toEntity(domain: InterestField): InterestFieldEntity {
    const entity = new InterestFieldEntity();
    entity.id = domain.id.toHexString();
    entity.name = domain.name.value;
    entity.deletedAt = domain.deletedAt;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    entity.fieldOfWork = FieldOfWorkTransformer.toEntity(domain.fieldOfWork);
    return entity;
  }

  static fromEntity(entity: InterestFieldEntity): InterestField {
    return {
      id: new ObjectId(entity.id),
      name: new InterestFieldName(entity.name),
      fieldOfWork: FieldOfWorkTransformer.fromEntity(entity.fieldOfWork),
      deletedAt: entity.deletedAt,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}

export class FieldOfWorkTransformer {
  static toEntity(domain: FieldOfWork): FieldOfWorkEntity {
    const entity = new FieldOfWorkEntity();
    entity.id = domain.id.toHexString();
    entity.name = domain.name.value;
    entity.deletedAt = domain.deletedAt;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    return entity;
  }

  static fromEntity(entity: FieldOfWorkEntity): FieldOfWork {
    return {
      id: new ObjectId(entity.id),
      name: new FieldOfWorkName(entity.name),
      interestFields: entity.interestFields.map((interestField) =>
        InterestOfFieldTransformer.fromEntity(interestField),
      ),
      deletedAt: entity.deletedAt,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}

export class PortfolioFileTransformer {
  static toEntity(domain: PortfolioFile): PortfolioFileEntity {
    const entity = new PortfolioFileEntity();
    entity.id = domain.id.toHexString();
    entity.link = domain.link.value;
    entity.deletedAt = domain.deletedAt;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    return entity;
  }

  static fromEntity(entity: PortfolioFileEntity): PortfolioFile {
    return {
      id: new ObjectId(entity.id),
      link: new Link(entity.link),
      deletedAt: entity.deletedAt,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}

export class PortfolioLinkTransformer {
  static toEntity(domain: PortfolioLink): PortfolioLinkEntity {
    const entity = new PortfolioLinkEntity();
    entity.id = domain.id.toHexString();
    entity.link = domain.link.value;
    entity.deletedAt = domain.deletedAt;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    return entity;
  }

  static fromEntity(entity: PortfolioLinkEntity): PortfolioLink {
    return {
      id: new ObjectId(entity.id),
      link: new Link(entity.link),
      deletedAt: entity.deletedAt,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}

export class ProfileImageTransformer {
  static toEntity(domain: ProfileImage): ProfileImageEntity {
    const entity = new ProfileImageEntity();
    entity.id = domain.id.toHexString();
    entity.name = domain.name.value;
    entity.mimeType = domain.mimeType;
    entity.link = domain.link.value;
    entity.deletedAt = domain.deletedAt;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    return entity;
  }

  static fromEntity(entity: ProfileImageEntity): ProfileImage {
    return {
      id: new ObjectId(entity.id),
      link: new Link(entity.link),
      name: new ProfileImageName(entity.name),
      mimeType: entity.mimeType as CustomMimeType,
      deletedAt: entity.deletedAt,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}

export class ProjectExperienceTransformer {
  static toEntity(domain: ProjectExperience): ProjectExperienceEntity {
    const entity = new ProjectExperienceEntity();
    entity.id = domain.id.toHexString();
    entity.organizationName = domain.organizationName.value;
    entity.processStatus = domain.processStatus;
    entity.projectDescription = domain.projectDescription.value;
    entity.projectName = domain.projectName.value;
    entity.startedAt = domain.startedAt;
    entity.endedAt = domain.endedAt;
    entity.deletedAt = domain.deletedAt;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    return entity;
  }

  static fromEntity(entity: ProjectExperienceEntity): ProjectExperience {
    return {
      id: new ObjectId(entity.id),
      organizationName: new OrganizationName(entity.organizationName),
      processStatus: entity.processStatus as ProcessStatus,
      projectDescription: new ProjectDescription(entity.projectDescription),
      projectName: new ProjectName(entity.projectName),
      startedAt: entity.startedAt,
      endedAt: entity.endedAt,
      deletedAt: entity.deletedAt,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}

export class TechnicalSkillTransformer {
  static toEntity(domain: TechnicalSkill): TechnicalSkillEntity {
    const entity = new TechnicalSkillEntity();
    entity.id = domain.id.toHexString();
    entity.name = domain.name.value;
    entity.deletedAt = domain.deletedAt;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    return entity;
  }

  static fromEntity(entity: TechnicalSkillEntity): TechnicalSkill {
    return {
      id: new ObjectId(entity.id),
      name: new TechnicalSkillName(entity.name),
      deletedAt: entity.deletedAt,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}

export class WorkExperienceTransformer {
  static toEntity(domain: WorkExperience): WorkExperienceEntity {
    const entity = new WorkExperienceEntity();
    entity.id = domain.id.toHexString();
    entity.companyName = domain.companyName.value;
    entity.department = domain.department.value;
    entity.description = domain.description.value;
    entity.employmentType = domain.employmentType;
    entity.position = domain.position.value;
    entity.startedAt = domain.startedAt;
    entity.endedAt = domain.endedAt;
    entity.deletedAt = domain.deletedAt;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    return entity;
  }

  static fromEntity(entity: WorkExperienceEntity): WorkExperience {
    return {
      id: new ObjectId(entity.id),
      companyName: new CompanyName(entity.companyName),
      department: new Department(entity.department),
      description: new WorkExperienceDescription(entity.description),
      employmentType: entity.employmentType as EmploymentType,
      position: new WorkPosition(entity.position),
      startedAt: entity.startedAt,
      endedAt: entity.endedAt,
      deletedAt: entity.deletedAt,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}

export class ResumeTransformer {
  static toEntity(domain: Resume): ResumeEntity {
    return {
      id: domain.id.toHexString(),
      userAccountId: domain.userAccountId.toHexString(),
      address: domain.address.value,
      briefIntroduction: domain.briefIntroduction.value,
      email: domain.email.value,
      name: domain.name.value,
      occupation: domain.occupation.value,
      phoneNumber: domain.phoneNumber.value,
      profileImage: domain.profileImage
        ? ProfileImageTransformer.toEntity(domain.profileImage)
        : undefined,
      portfolioFiles: domain.portfolioFiles?.map((file) =>
        PortfolioFileTransformer.toEntity(file),
      ),
      portfolioLinks: domain.portfolioLinks?.map((link) =>
        PortfolioLinkTransformer.toEntity(link),
      ),
      projectExperiences: domain.projectExperiences?.map((experience) =>
        ProjectExperienceTransformer.toEntity(experience),
      ),
      interestsFields: domain.interestsFields?.map((field) =>
        InterestOfFieldTransformer.toEntity(field),
      ),
      technicalSkills: domain.technicalSkills?.map((skill) =>
        TechnicalSkillTransformer.toEntity(skill),
      ),
      workExperiences: domain.workExperiences?.map((experience) =>
        WorkExperienceTransformer.toEntity(experience),
      ),
      deletedAt: domain.deletedAt,
      createdAt: domain.createdAt,
      updatedAt: domain.updatedAt,
    };
  }

  static fromEntity(entity: ResumeEntity): Resume {
    return {
      id: new ObjectId(entity.id),
      userAccountId: new ObjectId(entity.userAccountId),
      address: new Address(entity.address),
      briefIntroduction: new BriefIntroduction(entity.briefIntroduction),
      email: new Email(entity.email),
      name: new ResumeName(entity.name),
      occupation: new ResumeOccupation(entity.occupation),
      phoneNumber: new PhoneNumber(entity.phoneNumber),
      profileImage: entity.profileImage
        ? ProfileImageTransformer.fromEntity(entity.profileImage)
        : undefined,
      portfolioFiles: entity.portfolioFiles?.map((file) =>
        PortfolioFileTransformer.fromEntity(file),
      ),
      portfolioLinks: entity.portfolioLinks?.map((link) =>
        PortfolioLinkTransformer.fromEntity(link),
      ),
      projectExperiences: entity.projectExperiences?.map((experience) =>
        ProjectExperienceTransformer.fromEntity(experience),
      ),
      interestsFields: entity.interestsFields?.map((field) =>
        InterestOfFieldTransformer.fromEntity(field),
      ),
      technicalSkills: entity.technicalSkills?.map((skill) =>
        TechnicalSkillTransformer.fromEntity(skill),
      ),
      workExperiences: entity.workExperiences?.map((experience) =>
        WorkExperienceTransformer.fromEntity(experience),
      ),
      deletedAt: entity.deletedAt,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
