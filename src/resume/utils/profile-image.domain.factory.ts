import { ObjectId } from 'mongodb';
import { ProfileImage } from '../domain/profile_image.domain';
import { ProfileImageRegisterData } from '../dto/profile-image.data.dto';

export class ProfileImageDomainFactory {
  public static createProfileImage(
    data: ProfileImageRegisterData,
  ): ProfileImage {
    return {
      ...data,
      id: new ObjectId(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
}
