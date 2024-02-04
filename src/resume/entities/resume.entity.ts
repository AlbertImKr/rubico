import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
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

@Entity({ name: 'resume' })
export class ResumeEntity {
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

  @ManyToMany(() => WorkExperienceEntity, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
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
}
