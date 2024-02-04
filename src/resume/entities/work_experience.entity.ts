import {
  EntityCreatedAt,
  EntityDeletedAt,
  EntityUpdatedAt,
} from '../../shared/decorators/entity.decorator';
import { Column, Entity, ObjectId, PrimaryColumn } from 'typeorm';
import { WorkExperience } from '../domain/work_experience.domain';
import { CompanyName } from '../../shared/models/company-name.model';
import { Department } from '../../shared/models/department.model';
import { WorkExperienceDescription } from '../../shared/models/work-experience-description.model';
import { EmploymentType } from '../enums/employment-type.enum';
import { WorkPosition } from '../../shared/models/work-position.model';

@Entity({ name: 'work_experience' })
export class WorkExperienceEntity {
  @PrimaryColumn()
  id: string;

  @Column({ name: 'company_name' })
  companyName: string;

  @Column()
  department: string;

  @Column()
  description: string;

  @Column({ name: 'employment_type' })
  employmentType: string;

  @Column()
  position: string;

  @Column({ name: 'start_date' })
  startDate: Date;

  @Column({ name: 'end_date' })
  endDate: Date;

  @EntityDeletedAt()
  deletedAt: Date;

  @EntityCreatedAt()
  createdAt: Date;

  @EntityUpdatedAt()
  updatedAt: Date;

  static from(domain: WorkExperience): WorkExperienceEntity {
    const entity = new WorkExperienceEntity();
    entity.id = domain.id.toHexString();
    entity.companyName = domain.companyName.value;
    entity.department = domain.department.value;
    entity.description = domain.description.value;
    entity.employmentType = domain.employmentType;
    entity.position = domain.position.value;
    entity.startDate = domain.startDate;
    entity.endDate = domain.endDate;
    entity.deletedAt = domain.deletedAt;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    return entity;
  }

  static toDomain(entity: WorkExperienceEntity): WorkExperience {
    return {
      id: new ObjectId(entity.id),
      companyName: new CompanyName(entity.companyName),
      department: new Department(entity.department),
      description: new WorkExperienceDescription(entity.description),
      employmentType: entity.employmentType as EmploymentType,
      position: new WorkPosition(entity.position),
      startDate: entity.startDate,
      endDate: entity.endDate,
      deletedAt: entity.deletedAt,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
