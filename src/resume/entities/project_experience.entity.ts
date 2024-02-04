import { Column, Entity, ManyToOne, ObjectId } from 'typeorm';
import {
  EntityCreatedAt,
  EntityDeletedAt,
  EntityPrimaryId,
  EntityUpdatedAt,
} from '../../shared/decorators/entity.decorator';
import { ResumeEntityEntity } from './resume.entity';
import { ProjectExperience } from '../domain/project_experience.domain';
import { OrganizationName } from '../../shared/models/organization-name.model';
import { ProcessStatus } from '../enums/process-status.enum';
import { ProjectDescription } from '../../shared/models/project-description.model';
import { ProjectName } from '../../shared/models/project-name.model';

@Entity({ name: 'project_experience' })
export class ProjectExperienceEntity {
  @EntityPrimaryId()
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
  projectStartDate: Date;

  @Column({ name: 'project_end_date' })
  projectEndDate: Date;

  @ManyToOne(() => ResumeEntityEntity, (resume) => resume.projectExperiences)
  resume: ResumeEntityEntity;

  @EntityDeletedAt()
  deletedAt: Date;

  @EntityCreatedAt()
  createdAt: Date;

  @EntityUpdatedAt()
  updatedAt: Date;

  static from(domain: ProjectExperience): ProjectExperienceEntity {
    const entity = new ProjectExperienceEntity();
    entity.id = domain.id.toHexString();
    entity.organizationName = domain.organizationName.value;
    entity.processStatus = domain.processStatus;
    entity.projectDescription = domain.projectDescription.value;
    entity.projectName = domain.projectName.value;
    entity.projectStartDate = domain.projectStartDate;
    entity.projectEndDate = domain.projectEndDate;
    entity.deletedAt = domain.deletedAt;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    return entity;
  }

  static toDomain(entity: ProjectExperienceEntity): ProjectExperience {
    return {
      id: new ObjectId(entity.id),
      organizationName: new OrganizationName(entity.organizationName),
      processStatus: entity.processStatus as ProcessStatus,
      projectDescription: new ProjectDescription(entity.projectDescription),
      projectName: new ProjectName(entity.projectName),
      projectStartDate: entity.projectStartDate,
      projectEndDate: entity.projectEndDate,
      deletedAt: entity.deletedAt,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
