import { Column, Entity, ObjectId, PrimaryColumn } from 'typeorm';
import {
  EntityCreatedAt,
  EntityDeletedAt,
  EntityUpdatedAt,
} from '../../shared/decorators/entity.decorator';
import { TechnicalSkill } from '../domain/technical_skill.domain';
import { TechnicalSkillName } from '../model/technical-skill-name.model';

@Entity({ name: 'technical_skill' })
export class TechnicalSkillEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @EntityDeletedAt()
  deletedAt: Date;

  @EntityCreatedAt()
  createdAt: Date;

  @EntityUpdatedAt()
  updatedAt: Date;

  static from(domain: TechnicalSkill): TechnicalSkillEntity {
    const entity = new TechnicalSkillEntity();
    entity.id = domain.id.toHexString();
    entity.name = domain.name.value;
    entity.deletedAt = domain.deletedAt;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    return entity;
  }

  static toDomain(entity: TechnicalSkillEntity): TechnicalSkill {
    return {
      id: new ObjectId(entity.id),
      name: new TechnicalSkillName(entity.name),
      deletedAt: entity.deletedAt,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
