import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import {
  EntityCreatedAt,
  EntityDeletedAt,
  EntityUpdatedAt,
} from '../../shared/decorators/entity.decorator';
import { ResumeEntity } from './resume.entity';

@Entity({ name: 'portfolio_file' })
export class PortfolioFileEntity {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => ResumeEntity, (resume) => resume.portfolioFiles)
  resume: ResumeEntity;

  @Column()
  link: string;

  @EntityDeletedAt()
  deletedAt: Date;

  @EntityCreatedAt()
  createdAt: Date;

  @EntityUpdatedAt()
  updatedAt: Date;
}
