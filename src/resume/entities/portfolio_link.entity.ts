import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  ObjectId,
  PrimaryColumn,
} from 'typeorm';
import { ResumeEntityEntity } from './resume.entity';
import {
  EntityCreatedAt,
  EntityDeletedAt,
  EntityUpdatedAt,
} from '../../shared/decorators/entity.decorator';
import { PortfolioLink } from '../domain/portfolio_link.domain';
import { Link } from '../../shared/models/link.model';

@Entity({ name: 'portfolio_link' })
export class PortfolioLinkEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  link: string;

  @ManyToOne(() => ResumeEntityEntity, (resume) => resume.portfolioLinks)
  @JoinColumn({ name: 'resume_id', referencedColumnName: 'id' })
  resume: ResumeEntityEntity;

  @EntityDeletedAt()
  deletedAt: Date;

  @EntityCreatedAt()
  createdAt: Date;

  @EntityUpdatedAt()
  updatedAt: Date;

  static from(domain: PortfolioLink): PortfolioLinkEntity {
    const entity = new PortfolioLinkEntity();
    entity.id = domain.id.toHexString();
    entity.link = domain.link.value;
    entity.deletedAt = domain.deletedAt;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    return entity;
  }

  static toDomain(entity: PortfolioLinkEntity): PortfolioLink {
    return {
      id: new ObjectId(entity.id),
      link: new Link(entity.link),
      deletedAt: entity.deletedAt,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
