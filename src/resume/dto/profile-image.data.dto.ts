import { Link } from '../../shared/models/link.model';
import { ProfileImageName } from '../../shared/models/profile-image-name.model';
import { CustomMimeType } from '../types/mine-type.types';
import { ObjectId } from 'mongodb';

export class ProfileImageRegisterData {
  readonly name: ProfileImageName;
  readonly mimeType: CustomMimeType;
  readonly link: Link;
  readonly userId: ObjectId;
}
