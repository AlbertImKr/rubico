import { Entity } from 'typeorm';
import {
  EntityCreatedAt,
  EntityDeletedAt,
  EntityLink,
  EntityMimeType,
  EntityPrimaryId,
  EntityProfileImageName,
  EntityUpdatedAt,
} from '../../shared/decorators/entity.decorator';
import { ObjectId } from 'mongodb';
import { Link } from '../../shared/models/link.model';
import { CustomMimeType } from '../types/mine-type.types';
import { ProfileImageName } from '../../shared/models/profile-image-name.model';

@Entity({ name: 'profile_image' })
export class ProfileImage {
  @EntityPrimaryId()
  id: ObjectId;

  @EntityLink()
  link: Link;

  @EntityProfileImageName()
  name: ProfileImageName;

  @EntityMimeType()
  mimeType: CustomMimeType;

  @EntityDeletedAt()
  deletedAt: Date;

  @EntityCreatedAt()
  createdAt: Date;

  @EntityUpdatedAt()
  updatedAt: Date;
}
