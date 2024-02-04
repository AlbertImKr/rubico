import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { ResumeEntity } from './resume.entity';
import {
  EntityCreatedAt,
  EntityDeletedAt,
  EntityUpdatedAt,
} from '../../shared/decorators/entity.decorator';

@Entity({ name: 'portfolio_link' })
export class PortfolioLinkEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  link: string;

  @ManyToOne(() => ResumeEntity, (resume) => resume.portfolioLinks)
  @JoinColumn({ name: 'resume_id', referencedColumnName: 'id' })
  resume: ResumeEntity;

  @EntityDeletedAt()
  deletedAt: Date;

  @EntityCreatedAt()
  createdAt: Date;

  @EntityUpdatedAt()
  updatedAt: Date;
}
