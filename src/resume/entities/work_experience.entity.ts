import {
  EntityCreatedAt,
  EntityDeletedAt,
  EntityUpdatedAt,
} from '../../shared/decorators/entity.decorator';
import { Column, Entity, PrimaryColumn } from 'typeorm';

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
  startedAt: Date;

  @Column({ name: 'end_date' })
  endedAt: Date;

  @EntityDeletedAt()
  deletedAt: Date;

  @EntityCreatedAt()
  createdAt: Date;

  @EntityUpdatedAt()
  updatedAt: Date;
}
