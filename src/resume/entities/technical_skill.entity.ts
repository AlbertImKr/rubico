import { Column, Entity, PrimaryColumn } from 'typeorm';
import {
  EntityCreatedAt,
  EntityDeletedAt,
  EntityUpdatedAt,
} from '../../shared/decorators/entity.decorator';

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
}
