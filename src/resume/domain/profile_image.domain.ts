import { ObjectId } from 'mongodb';
import { Link } from '../../shared/models/link.model';
import { CustomMimeType } from '../types/mine-type.types';
import { ProfileImageName } from '../../shared/models/profile-image-name.model';

export class ProfileImage {
  id: ObjectId;

  link: Link;

  name: ProfileImageName;

  mimeType: CustomMimeType;

  deletedAt?: Date;

  createdAt: Date;

  updatedAt: Date;
}
