import { Column, DeleteDateColumn, Entity, ManyToOne } from 'typeorm';
import {
  EntityCreatedAt,
  EntityPrimaryId,
  EntityUpdatedAt,
} from '../../shared/decorators/entity.decorator';
import { ObjectId } from 'mongodb';
import { Resume } from './resume.entity';

@Entity({ name: 'portfolio_file' })
export class PortfolioFile {
  @EntityPrimaryId()
  id: ObjectId;

  @ManyToOne(() => Resume, (resume) => resume.portfolioFiles)
  resume: Resume;

  @Column()
  link: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @EntityCreatedAt()
  createdAt: Date;

  @EntityUpdatedAt()
  updatedAt: Date;
}
