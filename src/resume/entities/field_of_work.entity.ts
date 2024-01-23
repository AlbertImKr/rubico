import { ObjectId } from 'mongodb';
import {
  EntityCreatedAt,
  EntityPrimaryId,
  EntityUpdatedAt,
} from '../../shared/decorators/entity.decorator';
import { Column, DeleteDateColumn, Entity, OneToMany } from 'typeorm';
import { InterestField } from './field_of_interest.entity';

@Entity({ name: 'field_of_work' })
export class FieldOfWork {
  @EntityPrimaryId()
  id: ObjectId;

  @OneToMany(() => InterestField, (interestField) => interestField.fieldOfWork)
  interestFields: InterestField[];

  @Column()
  name: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @EntityCreatedAt()
  createdAt: Date;

  @EntityUpdatedAt()
  updatedAt: Date;
}
