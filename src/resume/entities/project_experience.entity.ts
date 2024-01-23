import { Column, DeleteDateColumn, Entity, ManyToOne } from 'typeorm';
import {
  EntityCreatedAt,
  EntityPrimaryId,
  EntityUpdatedAt,
} from '../../shared/decorators/entity.decorator';
import { ObjectId } from 'mongodb';
import { Resume } from './resume.entity';

@Entity({ name: 'project_experience' })
export class ProjectExperience {
  @EntityPrimaryId()
  id: ObjectId;

  @Column({ name: 'organization_name' })
  organizationName: string;

  @Column({ name: 'process_status' })
  processStatus: string;

  @Column({ name: 'project_description' })
  projectDescription: string;

  @Column({ name: 'project_name' })
  projectName: string;

  @Column({ name: 'project_start_date' })
  projectStartDate: Date;

  @Column({ name: 'project_end_date' })
  projectEndDate: Date;

  @ManyToOne(() => Resume, (resume) => resume.projectExperiences)
  resume: Resume;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @EntityCreatedAt()
  createdAt: Date;

  @EntityUpdatedAt()
  updatedAt: Date;
}
