import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import {
  EntityCreatedAt,
  EntityDeletedAt,
  EntityUpdatedAt,
} from '../../shared/decorators/entity.decorator';
import { FieldOfWorkEntity } from './field_of_work.entity';

@Entity({ name: 'field_of_interest' })
export class InterestFieldEntity {
  @PrimaryColumn()
  id: string;

  @ManyToOne(
    () => FieldOfWorkEntity,
    (fieldOfWork) => fieldOfWork.interestFields,
  )
  @JoinColumn({ name: 'field_of_work_id' })
  fieldOfWork: FieldOfWorkEntity;

  @Column()
  name: string;

  @EntityDeletedAt()
  deletedAt: Date;

  @EntityCreatedAt()
  createdAt: Date;

  @EntityUpdatedAt()
  updatedAt: Date;
}
