import { ObjectId } from 'mongodb';
import {
  EntityCreatedAt,
  EntityPrimaryId,
  EntityUpdatedAt,
} from '../../shared/decorators/entity.decorator';
import { Column, DeleteDateColumn, Entity } from 'typeorm';

@Entity({ name: 'work_experience' })
export class WorkExperience {
  @EntityPrimaryId()
  id: ObjectId;

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

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @EntityCreatedAt()
  createdAt: Date;

  @EntityUpdatedAt()
  updatedAt: Date;
}
