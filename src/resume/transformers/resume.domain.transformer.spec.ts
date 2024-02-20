import { ObjectId } from 'mongodb';
import {
  InterestOfFieldTransformer,
  FieldOfWorkTransformer,
  PortfolioFileTransformer,
  PortfolioLinkTransformer,
  ProfileImageTransformer,
  ProjectExperienceTransformer,
  ResumeTransformer,
  TechnicalSkillTransformer,
  WorkExperienceTransformer,
} from './resume.domain.transformer';
import { InterestField } from '../domain/field_of_interest.domain';
import { InterestFieldName } from '../model/Interest-field-name.model';
import { FieldOfWorkName } from '../model/field-of-work-name.model';
import { InterestFieldEntity } from '../entities/field_of_interest.entity';
import { PortfolioFile } from '../domain/portfolio_file.domain';
import { Link } from '../../shared/models/link.model';
import { PortfolioFileEntity } from '../entities/portfolio_file.entity';
import { PortfolioLink } from '../domain/portfolio_link.domain';
import { PortfolioLinkEntity } from '../entities/portfolio_link.entity';
import { ProfileImage } from '../domain/profile_image.domain';
import { ProfileImageName } from '../../shared/models/profile-image-name.model';
import { ProfileImageEntity } from '../entities/profile_image.entity';
import { ProjectExperience } from '../domain/project_experience.domain';
import { OrganizationName } from '../../shared/models/organization-name.model';
import { ProjectDescription } from '../../shared/models/project-description.model';
import { ProcessStatus } from '../enums/process-status.enum';
import { ProjectExperienceEntity } from '../entities/project_experience.entity';
import { TechnicalSkill } from '../domain/technical_skill.domain';
import { TechnicalSkillName } from '../model/technical-skill-name.model';
import { WorkExperience } from '../domain/work_experience.domain';
import { CompanyName } from '../../shared/models/company-name.model';
import { Department } from '../../shared/models/department.model';
import { WorkExperienceDescription } from '../../shared/models/work-experience-description.model';
import { EmploymentType } from '../enums/employment-type.enum';
import { WorkPosition } from '../../shared/models/work-position.model';
import { Resume } from '../domain/resume.domain';
import { Address } from '../../shared/models/address.model';
import { BriefIntroduction } from '../../shared/models/brief-Introduction.model';
import { Email } from '../../shared/models/email.model';
import { ResumeName } from '../../shared/models/resume-name.model';
import { ResumeOccupation } from '../../shared/models/resume-occupation.model';
import { PhoneNumber } from '../../shared/models/phone-number.model';

describe('InterestOfFieldTransformer', () => {
  it('toEntity', () => {
    // given
    const interestField: InterestField = {
      id: new ObjectId(),
      fieldOfWork: {
        id: new ObjectId(),
        name: new FieldOfWorkName('fieldOfWorkName'),
        interestFields: undefined,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      name: new InterestFieldName('interestFieldName'),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // when
    const result: InterestFieldEntity =
      InterestOfFieldTransformer.toEntity(interestField);

    // then
    expect(result.id).toBe(interestField.id.toHexString());
    expect(result.name).toBe(interestField.name.value);
    expect(result.createdAt).toBe(interestField.createdAt);
    expect(result.updatedAt).toBe(interestField.updatedAt);
    expect(result.fieldOfWork.id).toBe(
      interestField.fieldOfWork.id.toHexString(),
    );
    expect(result.fieldOfWork.name).toBe(interestField.fieldOfWork.name.value);
    expect(result.fieldOfWork.interestFields).toEqual(
      interestField.fieldOfWork.interestFields,
    );
    expect(result.fieldOfWork.createdAt).toBe(
      interestField.fieldOfWork.createdAt,
    );
    expect(result.fieldOfWork.updatedAt).toBe(
      interestField.fieldOfWork.updatedAt,
    );
  });

  it('fromEntity', () => {
    // given
    const interestFieldEntity: InterestFieldEntity = {
      id: new ObjectId().toHexString(),
      name: 'interestFieldName',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: undefined,
      fieldOfWork: {
        id: new ObjectId().toHexString(),
        name: 'fieldOfWorkName',
        interestFields: [],
        deletedAt: undefined,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    };

    // when
    const result: InterestField =
      InterestOfFieldTransformer.fromEntity(interestFieldEntity);

    // then
    expect(result.id.toHexString()).toBe(interestFieldEntity.id);
    expect(result.name.value).toBe(interestFieldEntity.name);
    expect(result.createdAt).toBe(interestFieldEntity.createdAt);
    expect(result.updatedAt).toBe(interestFieldEntity.updatedAt);
    expect(result.fieldOfWork.id.toHexString()).toBe(
      interestFieldEntity.fieldOfWork.id,
    );
    expect(result.fieldOfWork.name.value).toBe(
      interestFieldEntity.fieldOfWork.name,
    );
    expect(result.fieldOfWork.interestFields).toEqual(
      interestFieldEntity.fieldOfWork.interestFields,
    );
    expect(result.fieldOfWork.createdAt).toBe(
      interestFieldEntity.fieldOfWork.createdAt,
    );
    expect(result.fieldOfWork.updatedAt).toBe(
      interestFieldEntity.fieldOfWork.updatedAt,
    );
    expect(result.fieldOfWork.deletedAt).toBe(
      interestFieldEntity.fieldOfWork.deletedAt,
    );
    expect(result.deletedAt).toBe(interestFieldEntity.deletedAt);
  });
});

describe('FieldOfWorkTransformer', () => {
  it('toEntity', () => {
    // given
    const fieldOfWork = {
      id: new ObjectId(),
      name: new FieldOfWorkName('fieldOfWorkName'),
      interestFields: undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // when
    const result = FieldOfWorkTransformer.toEntity(fieldOfWork);

    // then
    expect(result.id).toBe(fieldOfWork.id.toHexString());
    expect(result.name).toBe(fieldOfWork.name.value);
    expect(result.createdAt).toBe(fieldOfWork.createdAt);
    expect(result.updatedAt).toBe(fieldOfWork.updatedAt);
    expect(result.interestFields).toEqual(fieldOfWork.interestFields);
  });

  it('fromEntity', () => {
    // given
    const fieldOfWorkEntity = {
      id: new ObjectId().toHexString(),
      name: 'fieldOfWorkName',
      interestFields: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: undefined,
    };

    // when
    const result = FieldOfWorkTransformer.fromEntity(fieldOfWorkEntity);

    // then
    expect(result.id.toHexString()).toBe(fieldOfWorkEntity.id);
    expect(result.name.value).toBe(fieldOfWorkEntity.name);
    expect(result.createdAt).toBe(fieldOfWorkEntity.createdAt);
    expect(result.updatedAt).toBe(fieldOfWorkEntity.updatedAt);
    expect(result.interestFields).toEqual(fieldOfWorkEntity.interestFields);
    expect(result.deletedAt).toBe(fieldOfWorkEntity.deletedAt);
  });
});

describe('PortfolioFileTransformer', () => {
  it('toEntity', () => {
    // given
    const portfolioFile: PortfolioFile = {
      id: new ObjectId(),
      link: new Link('https://www.naver.com'),
      deletedAt: undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // when
    const result = PortfolioFileTransformer.toEntity(portfolioFile);

    // then
    expect(result.id).toBe(portfolioFile.id.toHexString());
    expect(result.link).toBe(portfolioFile.link.value);
    expect(result.deletedAt).toBe(portfolioFile.deletedAt);
    expect(result.createdAt).toBe(portfolioFile.createdAt);
    expect(result.updatedAt).toBe(portfolioFile.updatedAt);
  });

  it('fromEntity', () => {
    // given
    const portfolioFileEntity: PortfolioFileEntity = {
      id: new ObjectId().toHexString(),
      link: 'https://www.naver.com',
      resume: undefined,
      deletedAt: undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // when
    const result = PortfolioFileTransformer.fromEntity(portfolioFileEntity);

    // then
    expect(result.id.toHexString()).toBe(portfolioFileEntity.id);
    expect(result.link.value).toBe(portfolioFileEntity.link);
    expect(result.deletedAt).toBe(portfolioFileEntity.deletedAt);
    expect(result.createdAt).toBe(portfolioFileEntity.createdAt);
    expect(result.updatedAt).toBe(portfolioFileEntity.updatedAt);
  });
});

describe('PortfolioLinkTransformer', () => {
  it('toEntity', () => {
    // given
    const portfolioLink: PortfolioLink = {
      id: new ObjectId(),
      link: new Link('https://www.naver.com'),
      deletedAt: undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // when
    const result = PortfolioLinkTransformer.toEntity(portfolioLink);

    // then
    expect(result.id).toBe(portfolioLink.id.toHexString());
    expect(result.link).toBe(portfolioLink.link.value);
    expect(result.deletedAt).toBe(portfolioLink.deletedAt);
    expect(result.createdAt).toBe(portfolioLink.createdAt);
    expect(result.updatedAt).toBe(portfolioLink.updatedAt);
  });

  it('fromEntity', () => {
    // given
    const portfolioLinkEntity: PortfolioLinkEntity = {
      id: new ObjectId().toHexString(),
      link: 'https://www.naver.com',
      resume: undefined,
      deletedAt: undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // when
    const result = PortfolioFileTransformer.fromEntity(portfolioLinkEntity);

    // then
    expect(result.id.toHexString()).toBe(portfolioLinkEntity.id);
    expect(result.link.value).toBe(portfolioLinkEntity.link);
    expect(result.deletedAt).toBe(portfolioLinkEntity.deletedAt);
    expect(result.createdAt).toBe(portfolioLinkEntity.createdAt);
    expect(result.updatedAt).toBe(portfolioLinkEntity.updatedAt);
  });
});

describe('ProfileImageTransformer', () => {
  it('toEntity', () => {
    // given
    const profileImage: ProfileImage = {
      id: new ObjectId(),
      name: new ProfileImageName('profileImageName'),
      link: new Link('https://www.naver.com'),
      mimeType: 'image/png',
      deletedAt: undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // when
    const result = ProfileImageTransformer.toEntity(profileImage);

    // then
    expect(result.id).toBe(profileImage.id.toHexString());
    expect(result.link).toBe(profileImage.link.value);
    expect(result.deletedAt).toBe(profileImage.deletedAt);
    expect(result.createdAt).toBe(profileImage.createdAt);
    expect(result.updatedAt).toBe(profileImage.updatedAt);
  });

  it('fromEntity', () => {
    // given
    const profileImageEntity: ProfileImageEntity = {
      id: new ObjectId().toHexString(),
      name: 'profileImageName',
      link: 'https://www.naver.com',
      mimeType: 'image/png',
      deletedAt: undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // when
    const result = ProfileImageTransformer.fromEntity(profileImageEntity);

    // then
    expect(result.id.toHexString()).toBe(profileImageEntity.id);
    expect(result.link.value).toBe(profileImageEntity.link);
    expect(result.deletedAt).toBe(profileImageEntity.deletedAt);
    expect(result.createdAt).toBe(profileImageEntity.createdAt);
    expect(result.updatedAt).toBe(profileImageEntity.updatedAt);
  });
});

describe('ProjectExperienceTransformer', () => {
  it('toEntity', () => {
    // given
    const projectExperience: ProjectExperience = {
      id: new ObjectId(),
      organizationName: new OrganizationName('organizationName'),
      processStatus: ProcessStatus.APPLY,
      projectDescription: new ProjectDescription('projectDescription'),
      projectName: new ProjectDescription('projectName'),
      startedAt: new Date(),
      endedAt: new Date(),
      deletedAt: undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // when
    const result = ProjectExperienceTransformer.toEntity(projectExperience);

    // then
    expect(result.id).toBe(projectExperience.id.toHexString());
    expect(result.organizationName).toBe(
      projectExperience.organizationName.value,
    );
    expect(result.processStatus).toBe(projectExperience.processStatus);
    expect(result.projectDescription).toBe(
      projectExperience.projectDescription.value,
    );
    expect(result.projectName).toBe(projectExperience.projectName.value);
    expect(result.startedAt).toBe(projectExperience.startedAt);
    expect(result.endedAt).toBe(projectExperience.endedAt);
    expect(result.deletedAt).toBe(projectExperience.deletedAt);
    expect(result.createdAt).toBe(projectExperience.createdAt);
    expect(result.updatedAt).toBe(projectExperience.updatedAt);
  });

  it('fromEntity', () => {
    // given
    const projectExperienceEntity: ProjectExperienceEntity = {
      id: new ObjectId().toHexString(),
      organizationName: 'organizationName',
      processStatus: ProcessStatus.APPLY,
      projectDescription: 'projectDescription',
      projectName: 'projectName',
      startedAt: new Date(),
      endedAt: new Date(),
      deletedAt: undefined,
      resume: undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // when
    const result = ProjectExperienceTransformer.fromEntity(
      projectExperienceEntity,
    );

    // then
    expect(result.id.toHexString()).toBe(projectExperienceEntity.id);
    expect(result.organizationName.value).toBe(
      projectExperienceEntity.organizationName,
    );
    expect(result.processStatus).toBe(projectExperienceEntity.processStatus);
    expect(result.projectDescription.value).toBe(
      projectExperienceEntity.projectDescription,
    );
    expect(result.projectName.value).toBe(projectExperienceEntity.projectName);
    expect(result.startedAt).toBe(projectExperienceEntity.startedAt);
    expect(result.endedAt).toBe(projectExperienceEntity.endedAt);
    expect(result.deletedAt).toBe(projectExperienceEntity.deletedAt);
    expect(result.createdAt).toBe(projectExperienceEntity.createdAt);
    expect(result.updatedAt).toBe(projectExperienceEntity.updatedAt);
  });
});

describe('TechnicalSkillTransformer', () => {
  it('toEntity', () => {
    // given
    const technicalSkill: TechnicalSkill = {
      id: new ObjectId(),
      name: new TechnicalSkillName('technicalSkillName'),
      deletedAt: undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // when
    const result = TechnicalSkillTransformer.toEntity(technicalSkill);

    // then
    expect(result.id).toBe(technicalSkill.id.toHexString());
    expect(result.name).toBe(technicalSkill.name.value);
    expect(result.deletedAt).toBe(technicalSkill.deletedAt);
    expect(result.createdAt).toBe(technicalSkill.createdAt);
    expect(result.updatedAt).toBe(technicalSkill.updatedAt);
  });

  it('fromEntity', () => {
    // given
    const technicalSkillEntity = {
      id: new ObjectId().toHexString(),
      name: 'technicalSkillName',
      level: 1,
      deletedAt: undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // when
    const result = TechnicalSkillTransformer.fromEntity(technicalSkillEntity);

    // then
    expect(result.id.toHexString()).toBe(technicalSkillEntity.id);
    expect(result.name.value).toBe(technicalSkillEntity.name);
    expect(result.deletedAt).toBe(technicalSkillEntity.deletedAt);
    expect(result.createdAt).toBe(technicalSkillEntity.createdAt);
    expect(result.updatedAt).toBe(technicalSkillEntity.updatedAt);
  });
});

describe('WorkExperienceTransformer', () => {
  it('toEntity', () => {
    // given
    const workExperience: WorkExperience = {
      id: new ObjectId(),
      companyName: new CompanyName('companyName'),
      department: new Department('department'),
      description: new WorkExperienceDescription('description'),
      employmentType: EmploymentType.FULLTIME,
      position: new WorkPosition('position'),
      startedAt: new Date(),
      endedAt: new Date(),
      deletedAt: undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // when
    const result = WorkExperienceTransformer.toEntity(workExperience);

    // then
    expect(result.id).toBe(workExperience.id.toHexString());
    expect(result.companyName).toBe(workExperience.companyName.value);
    expect(result.department).toBe(workExperience.department.value);
    expect(result.description).toBe(workExperience.description.value);
    expect(result.employmentType).toBe(workExperience.employmentType);
    expect(result.position).toBe(workExperience.position.value);
    expect(result.startedAt).toBe(workExperience.startedAt);
    expect(result.endedAt).toBe(workExperience.endedAt);
    expect(result.deletedAt).toBe(workExperience.deletedAt);
    expect(result.createdAt).toBe(workExperience.createdAt);
    expect(result.updatedAt).toBe(workExperience.updatedAt);
  });

  it('fromEntity', () => {
    // given
    const workExperienceEntity = {
      id: new ObjectId().toHexString(),
      companyName: 'companyName',
      department: 'department',
      description: 'description',
      employmentType: EmploymentType.FULLTIME,
      position: 'position',
      startedAt: new Date(),
      endedAt: new Date(),
      deletedAt: undefined,
      resume: undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // when
    const result = WorkExperienceTransformer.fromEntity(workExperienceEntity);

    // then
    expect(result.id.toHexString()).toBe(workExperienceEntity.id);
    expect(result.companyName.value).toBe(workExperienceEntity.companyName);
    expect(result.department.value).toBe(workExperienceEntity.department);
    expect(result.description.value).toBe(workExperienceEntity.description);
    expect(result.employmentType).toBe(workExperienceEntity.employmentType);
    expect(result.position.value).toBe(workExperienceEntity.position);
    expect(result.startedAt).toBe(workExperienceEntity.startedAt);
    expect(result.endedAt).toBe(workExperienceEntity.endedAt);
    expect(result.deletedAt).toBe(workExperienceEntity.deletedAt);
    expect(result.createdAt).toBe(workExperienceEntity.createdAt);
    expect(result.updatedAt).toBe(workExperienceEntity.updatedAt);
  });
});

describe('ResumeTransformer', () => {
  it('toEntity', () => {
    // given
    const resume: Resume = {
      id: new ObjectId(),
      userAccountId: new ObjectId(),
      address: new Address('address'),
      briefIntroduction: new BriefIntroduction('briefIntroduction'),
      email: new Email('example@email.com'),
      name: new ResumeName('resumeName'),
      occupation: new ResumeOccupation('resumeOccupation'),
      phoneNumber: new PhoneNumber('010-1234-5678'),
      profileImage: undefined,
      portfolioFiles: [],
      portfolioLinks: [],
      projectExperiences: [],
      interestsFields: [],
      technicalSkills: [],
      workExperiences: [],
      deletedAt: undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // when
    const result = ResumeTransformer.toEntity(resume);

    // then
    expect(result.id).toBe(resume.id.toHexString());
    expect(result.userAccountId).toBe(resume.userAccountId.toHexString());
    expect(result.address).toBe(resume.address.value);
    expect(result.briefIntroduction).toBe(resume.briefIntroduction.value);
    expect(result.email).toBe(resume.email.value);
    expect(result.name).toBe(resume.name.value);
    expect(result.occupation).toBe(resume.occupation.value);
    expect(result.phoneNumber).toBe(resume.phoneNumber.value);
    expect(result.profileImage).toBe(resume.profileImage);
    expect(result.portfolioFiles).toEqual(resume.portfolioFiles);
    expect(result.portfolioLinks).toEqual(resume.portfolioLinks);
    expect(result.projectExperiences).toEqual(resume.projectExperiences);
    expect(result.interestsFields).toEqual(resume.interestsFields);
    expect(result.technicalSkills).toEqual(resume.technicalSkills);
    expect(result.workExperiences).toEqual(resume.workExperiences);
    expect(result.createdAt).toBe(resume.createdAt);
    expect(result.updatedAt).toBe(resume.updatedAt);
    expect(result.deletedAt).toBe(resume.deletedAt);
  });

  it('fromEntity', () => {
    // given
    const resumeEntity = {
      id: new ObjectId().toHexString(),
      userAccountId: new ObjectId().toHexString(),
      address: 'address',
      briefIntroduction: 'briefIntroduction',
      email: 'example@email.com',
      name: 'resumeName',
      occupation: 'resumeOccupation',
      phoneNumber: '010-1234-5678',
      profileImage: undefined,
      portfolioFiles: [],
      portfolioLinks: [],
      projectExperiences: [],
      interestsFields: [],
      technicalSkills: [],
      workExperiences: [],
      deletedAt: undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // when
    const result = ResumeTransformer.fromEntity(resumeEntity);

    // then
    expect(result.id.toHexString()).toBe(resumeEntity.id);
    expect(result.userAccountId.toHexString()).toBe(resumeEntity.userAccountId);
    expect(result.address.value).toBe(resumeEntity.address);
    expect(result.briefIntroduction.value).toBe(resumeEntity.briefIntroduction);
    expect(result.email.value).toBe(resumeEntity.email);
    expect(result.name.value).toBe(resumeEntity.name);
    expect(result.occupation.value).toBe(resumeEntity.occupation);
    expect(result.phoneNumber.value).toBe(resumeEntity.phoneNumber);
    expect(result.profileImage).toBe(resumeEntity.profileImage);
    expect(result.portfolioFiles).toEqual(resumeEntity.portfolioFiles);
    expect(result.portfolioLinks).toEqual(resumeEntity.portfolioLinks);
    expect(result.projectExperiences).toEqual(resumeEntity.projectExperiences);
    expect(result.interestsFields).toEqual(resumeEntity.interestsFields);
    expect(result.technicalSkills).toEqual(resumeEntity.technicalSkills);
    expect(result.workExperiences).toEqual(resumeEntity.workExperiences);
    expect(result.createdAt).toBe(resumeEntity.createdAt);
    expect(result.updatedAt).toBe(resumeEntity.updatedAt);
    expect(result.deletedAt).toBe(resumeEntity.deletedAt);
  });
});
