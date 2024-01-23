import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import {
  EntityCreatedAt,
  EntityPrimaryId,
  EntityUpdatedAt,
} from '../../shared/decorators/entity.decorator';
import { ObjectId } from 'mongodb';
import { FieldOfWork } from './field_of_work.entity';

@Entity({ name: 'field_of_interest' })
export class InterestField {
  @EntityPrimaryId()
  id: ObjectId;

  @ManyToOne(() => FieldOfWork, (fieldOfWork) => fieldOfWork.interestFields)
  @JoinColumn({ name: 'field_of_work_id' })
  fieldOfWork: FieldOfWork;

  @Column()
  name: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @EntityCreatedAt()
  createdAt: Date;

  @EntityUpdatedAt()
  updatedAt: Date;
}
