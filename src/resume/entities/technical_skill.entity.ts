import { Column, DeleteDateColumn, Entity } from 'typeorm';
import {
  EntityCreatedAt,
  EntityPrimaryId,
  EntityUpdatedAt,
} from '../../shared/decorators/entity.decorator';
import { ObjectId } from 'mongodb';

@Entity({ name: 'technical_skill' })
export class TechnicalSkill {
  @EntityPrimaryId()
  id: ObjectId;

  @Column()
  name: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @EntityCreatedAt()
  createdAt: Date;

  @EntityUpdatedAt()
  updatedAt: Date;
}
