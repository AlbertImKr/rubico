import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import {
  EntityCreatedAt,
  EntityDeletedAt,
  EntityUpdatedAt,
} from '../../shared/decorators/entity.decorator';
import { ResumeEntity } from './resume.entity';

@Entity({ name: 'project_experience' })
export class ProjectExperienceEntity {
  @PrimaryColumn()
  id: string;

  @Column({ name: 'organization_name' })
  organizationName: string;

  @Column({ name: 'process_status' })
  processStatus: string;

  @Column({ name: 'project_description' })
  projectDescription: string;

  @Column({ name: 'project_name' })
  projectName: string;

  @Column({ name: 'project_start_date' })
  startedAt: Date;

  @Column({ name: 'project_end_date' })
  endedAt: Date;

  @ManyToOne(() => ResumeEntity, (resume) => resume.projectExperiences)
  resume: ResumeEntity;

  @EntityDeletedAt()
  deletedAt: Date;

  @EntityCreatedAt()
  createdAt: Date;

  @EntityUpdatedAt()
  updatedAt: Date;
}
