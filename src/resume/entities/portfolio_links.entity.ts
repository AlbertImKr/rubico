import {
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { Resume } from './resume.entity';
import { ObjectId } from 'mongodb';
import {
  COLUMN_TYPE,
  ID_LENGTH,
} from '../../shared/constants/database.constants';
import {
  EntityCreatedAt,
  EntityUpdatedAt,
} from '../../shared/decorators/entity.decorator';

@Entity({ name: 'portfolio_links' })
export class PortfolioLink {
  @PrimaryColumn()
  link: string;

  @PrimaryColumn({
    type: COLUMN_TYPE.CHAR,
    length: ID_LENGTH,
    transformer: {
      to: (value: ObjectId) => value.toHexString(),
      from: (value: string) => new ObjectId(value),
    },
    name: 'resume_id',
  })
  resumeId: ObjectId;

  @ManyToOne(() => Resume, (resume) => resume.portfolioLinks)
  @JoinColumn({ name: 'resume_id', referencedColumnName: 'id' })
  resume: Resume;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @EntityCreatedAt()
  createdAt: Date;

  @EntityUpdatedAt()
  updatedAt: Date;
}
