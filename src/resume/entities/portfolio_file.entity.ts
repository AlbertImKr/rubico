import { Column, Entity, ManyToOne } from 'typeorm';
import {
  EntityCreatedAt,
  EntityDeletedAt,
  EntityPrimaryId,
  EntityUpdatedAt,
} from '../../shared/decorators/entity.decorator';
import { ResumeEntityEntity } from './resume.entity';
import { PortfolioFile } from '../domain/portfolio_file.domain';
import { ObjectId } from 'mongodb';
import { Link } from '../../shared/models/link.model';

@Entity({ name: 'portfolio_file' })
export class PortfolioFileEntity {
  @EntityPrimaryId()
  id: string;

  @ManyToOne(() => ResumeEntityEntity, (resume) => resume.portfolioFiles)
  resume: ResumeEntityEntity;

  @Column()
  link: string;

  @EntityDeletedAt()
  deletedAt: Date;

  @EntityCreatedAt()
  createdAt: Date;

  @EntityUpdatedAt()
  updatedAt: Date;

  static from(domain: PortfolioFile): PortfolioFileEntity {
    const entity = new PortfolioFileEntity();
    entity.id = domain.id.toHexString();
    entity.link = domain.link.value;
    entity.deletedAt = domain.deletedAt;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    return entity;
  }

  static toDomain(entity: PortfolioFileEntity): PortfolioFile {
    return {
      id: new ObjectId(entity.id),
      link: new Link(entity.link),
      deletedAt: entity.deletedAt,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
