import {
  EntityCreatedAt,
  EntityDeletedAt,
  EntityUpdatedAt,
} from '../../shared/decorators/entity.decorator';
import { Column, Entity, ObjectId, OneToMany, PrimaryColumn } from 'typeorm';
import { InterestFieldEntity } from './field_of_interest.entity';
import { FieldOfWork } from '../domain/field_of_work.domain';
import { FieldOfWorkName } from '../model/field-of-work-name.model';

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

  static from(domain: FieldOfWork): FieldOfWorkEntity {
    const entity = new FieldOfWorkEntity();
    entity.id = domain.id.toHexString();
    entity.name = domain.name.value;
    entity.deletedAt = domain.deletedAt;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    return entity;
  }

  static toDomain(entity: FieldOfWorkEntity): FieldOfWork {
    return {
      id: new ObjectId(entity.id),
      name: new FieldOfWorkName(entity.name),
      interestFields: entity.interestFields.map((interestField) =>
        InterestFieldEntity.toDomain(interestField),
      ),
      deletedAt: entity.deletedAt,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
