import {
  PROFILE_IMAGE_NAME_MAX_LENGTH,
  PROFILE_IMAGE_NAME_MIN_LENGTH,
} from '../constants/validator.constants';
import {
  ProfileImageNameTooLongError,
  ProfileImageNameTooShortError,
} from '../exception/error/profile-image-name.error';

export class ProfileImageName {
  readonly value: string;

  constructor(value: string) {
    ProfileImageName.validate(value);
    this.value = value;
  }

  private static validate(value: string) {
    if (value.length > PROFILE_IMAGE_NAME_MAX_LENGTH) {
      throw new ProfileImageNameTooLongError();
    }
    if (value.length < PROFILE_IMAGE_NAME_MIN_LENGTH) {
      throw new ProfileImageNameTooShortError();
    }
  }
}
