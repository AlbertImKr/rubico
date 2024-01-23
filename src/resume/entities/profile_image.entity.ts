import { Column, DeleteDateColumn, Entity, OneToOne } from 'typeorm';
import {
  EntityCreatedAt,
  EntityPrimaryId,
  EntityUpdatedAt,
} from '../../shared/decorators/entity.decorator';
import { ObjectId } from 'mongodb';
import { Resume } from './resume.entity';

@Entity({ name: 'profile_image' })
export class ProfileImage {
  @EntityPrimaryId()
  id: ObjectId;

  @OneToOne(() => Resume, (resume) => resume.profileImage)
  resume: Resume;

  @Column()
  link: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @EntityCreatedAt()
  createdAt: Date;

  @EntityUpdatedAt()
  updatedAt: Date;
}
