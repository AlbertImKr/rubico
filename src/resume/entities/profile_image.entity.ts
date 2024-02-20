import { Column, Entity, PrimaryColumn } from 'typeorm';
import {
  EntityCreatedAt,
  EntityDeletedAt,
  EntityUpdatedAt,
} from '../../shared/decorators/entity.decorator';

@Entity({ name: 'profile_image' })
export class ProfileImageEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  link: string;

  @Column()
  name: string;

  @Column()
  mimeType: string;

  @EntityDeletedAt()
  deletedAt: Date;

  @EntityCreatedAt()
  createdAt: Date;

  @EntityUpdatedAt()
  updatedAt: Date;
}
