import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import {
  EntityCreatedAt,
  EntityDeletedAt,
  EntityUpdatedAt,
} from '../../shared/decorators/entity.decorator';
import { FieldOfWorkEntity } from './field_of_work.entity';
import { InterestField } from '../domain/field_of_interest.domain';
import { ObjectId } from 'mongodb';
import { InterestFieldName } from '../model/Interest-field-name.model';

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

  static from(domain: InterestField): InterestFieldEntity {
    const entity = new InterestFieldEntity();
    entity.id = domain.id.toHexString();
    entity.name = domain.name.value;
    entity.deletedAt = domain.deletedAt;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    return entity;
  }

  static toDomain(entity: InterestFieldEntity): InterestField {
    return {
      id: new ObjectId(entity.id),
      name: new InterestFieldName(entity.name),
      fieldOfWork: FieldOfWorkEntity.toDomain(entity.fieldOfWork),
      deletedAt: entity.deletedAt,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
