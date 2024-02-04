import {
  EntityCreatedAt,
  EntityDeletedAt,
  EntityUpdatedAt,
} from '../../shared/decorators/entity.decorator';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { InterestFieldEntity } from './field_of_interest.entity';

@Entity({ name: 'field_of_work' })
export class FieldOfWorkEntity {
  @PrimaryColumn()
  id: string;

  @OneToMany(
    () => InterestFieldEntity,
    (interestField) => interestField.fieldOfWork,
  )
  interestFields: InterestFieldEntity[];

  @Column()
  name: string;

  @EntityDeletedAt()
  deletedAt: Date;

  @EntityCreatedAt()
  createdAt: Date;

  @EntityUpdatedAt()
  updatedAt: Date;
}
