import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ObjectId,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import {
  EntityCreatedAt,
  EntityDeletedAt,
  EntityUpdatedAt,
} from '../../shared/decorators/entity.decorator';
import { InterestFieldEntity } from './field_of_interest.entity';
import { PortfolioFileEntity } from './portfolio_file.entity';
import { PortfolioLinkEntity } from './portfolio_link.entity';
import { TechnicalSkillEntity } from './technical_skill.entity';
import { ProjectExperienceEntity } from './project_experience.entity';
import { WorkExperienceEntity } from './work_experience.entity';
import { ProfileImageEntity } from './profile_image.entity';
import { Resume } from '../domain/resume.domain';
import { Address } from '../../shared/models/address.model';
import { BriefIntroduction } from '../../shared/models/brief-Introduction.model';
import { Email } from '../../shared/models/email.model';
import { ResumeName } from '../../shared/models/resume-name.model';
import { ResumeOccupation } from '../../shared/models/resume-occupation.model';
import { PhoneNumber } from '../../shared/models/phone-number.model';

@Entity({ name: 'resume' })
export class ResumeEntityEntity {
  @PrimaryColumn()
  id: string;

  @Column({ name: 'user_account_id' })
  userAccountId: string;

  @Column()
  address: string;

  @Column({ name: 'brief_introduction' })
  briefIntroduction: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  occupation: string;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @OneToOne(() => ProfileImageEntity)
  @JoinColumn({ name: 'profile_image_id' })
  profileImage: ProfileImageEntity;

  @OneToMany(
    () => PortfolioFileEntity,
    (portfolioFile) => portfolioFile.resume,
    {
      cascade: ['insert', 'update', 'soft-remove'],
    },
  )
  portfolioFiles: PortfolioFileEntity[];

  @OneToMany(
    () => PortfolioLinkEntity,
    (portfolioLink) => portfolioLink.resume,
    {
      cascade: ['insert', 'update', 'soft-remove'],
    },
  )
  portfolioLinks: PortfolioLinkEntity[];

  @OneToMany(
    () => ProjectExperienceEntity,
    (projectExperience) => projectExperience.resume,
    {
      cascade: ['insert', 'update', 'soft-remove'],
    },
  )
  projectExperiences: ProjectExperienceEntity[];

  @ManyToMany(() => InterestFieldEntity)
  @JoinTable({
    name: 'resume_fields_of_interest',
    joinColumn: { name: 'resume_id' },
    inverseJoinColumn: { name: 'interest_field_id' },
  })
  interestsFields: InterestFieldEntity[];

  @ManyToMany(() => TechnicalSkillEntity)
  @JoinTable({
    name: 'resume_technical_skills',
    joinColumn: { name: 'resume_id' },
    inverseJoinColumn: { name: 'technical_skill_id' },
  })
  technicalSkills: TechnicalSkillEntity[];

  @ManyToMany(() => WorkExperienceEntity)
  @JoinTable({
    name: 'resume_work_experiences',
    joinColumn: { name: 'resume_id' },
    inverseJoinColumn: { name: 'work_experience_id' },
  })
  workExperiences: WorkExperienceEntity[];

  @EntityDeletedAt()
  deletedAt: Date;

  @EntityCreatedAt()
  createdAt: Date;

  @EntityUpdatedAt()
  updatedAt: Date;

  static from(domain: Resume): ResumeEntityEntity {
    const entity = new ResumeEntityEntity();
    entity.id = domain.id.toHexString();
    entity.userAccountId = domain.userAccountId.toHexString();
    entity.address = domain.address.value;
    entity.briefIntroduction = domain.briefIntroduction.value;
    entity.email = domain.email.value;
    entity.name = domain.name.value;
    entity.occupation = domain.occupation.value;
    entity.phoneNumber = domain.phoneNumber.value;
    entity.profileImage = ProfileImageEntity.from(domain.profileImage);
    entity.portfolioFiles = domain.portfolioFiles.map((file) =>
      PortfolioFileEntity.from(file),
    );
    entity.portfolioLinks = domain.portfolioLinks.map((link) =>
      PortfolioLinkEntity.from(link),
    );
    entity.projectExperiences = domain.projectExperiences.map((experience) =>
      ProjectExperienceEntity.from(experience),
    );
    entity.interestsFields = domain.interestsFields.map((field) =>
      InterestFieldEntity.from(field),
    );
    entity.technicalSkills = domain.technicalSkills.map((skill) =>
      TechnicalSkillEntity.from(skill),
    );
    entity.workExperiences = domain.workExperiences.map((experience) =>
      WorkExperienceEntity.from(experience),
    );
    entity.deletedAt = domain.deletedAt;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    return entity;
  }

  static toDomain(entity: ResumeEntityEntity): Resume {
    return {
      id: new ObjectId(entity.id),
      userAccountId: new ObjectId(entity.userAccountId),
      address: new Address(entity.address),
      briefIntroduction: new BriefIntroduction(entity.briefIntroduction),
      email: new Email(entity.email),
      name: new ResumeName(entity.name),
      occupation: new ResumeOccupation(entity.occupation),
      phoneNumber: new PhoneNumber(entity.phoneNumber),
      profileImage: ProfileImageEntity.toDomain(entity.profileImage),
      portfolioFiles: entity.portfolioFiles.map((file) =>
        PortfolioFileEntity.toDomain(file),
      ),
      portfolioLinks: entity.portfolioLinks.map((link) =>
        PortfolioLinkEntity.toDomain(link),
      ),
      projectExperiences: entity.projectExperiences.map((experience) =>
        ProjectExperienceEntity.toDomain(experience),
      ),
      interestsFields: entity.interestsFields.map((field) =>
        InterestFieldEntity.toDomain(field),
      ),
      technicalSkills: entity.technicalSkills.map((skill) =>
        TechnicalSkillEntity.toDomain(skill),
      ),
      workExperiences: entity.workExperiences.map((experience) =>
        WorkExperienceEntity.toDomain(experience),
      ),
      deletedAt: entity.deletedAt,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
