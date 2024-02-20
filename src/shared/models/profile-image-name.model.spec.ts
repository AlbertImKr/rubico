import {
  PROFILE_IMAGE_NAME_MAX_LENGTH,
  PROFILE_IMAGE_NAME_MIN_LENGTH,
} from '../constants/validator.constants';
import {
  ProfileImageNameTooLongError,
  ProfileImageNameTooShortError,
} from '../exception/error/profile-image-name.error';
import { ProfileImageName } from './profile-image-name.model';

describe('ProfileImageName', () => {
  const MAX_LENGTH_PROFILE_IMAGE_NAME = 'a'.repeat(
    PROFILE_IMAGE_NAME_MAX_LENGTH,
  );
  const TOO_LONG_PROFILE_IMAGE_NAME = 'a'.repeat(
    PROFILE_IMAGE_NAME_MAX_LENGTH + 1,
  );
  const MIN_LENGTH_PROFILE_IMAGE_NAME = 'a'.repeat(
    PROFILE_IMAGE_NAME_MIN_LENGTH,
  );
  const TOO_SHORT_PROFILE_IMAGE_NAME = 'a'.repeat(
    PROFILE_IMAGE_NAME_MIN_LENGTH - 1,
  );

  it('프로필 이미지 이름은 최대 제한 길이만큼 입력할 수 있다.', () => {
    expect(new ProfileImageName(MAX_LENGTH_PROFILE_IMAGE_NAME)).toBeDefined();
  });

  it('프로필 이미지 이름은 최소 제한 길이만큼 입력할 수 있다.', () => {
    expect(new ProfileImageName(MIN_LENGTH_PROFILE_IMAGE_NAME)).toBeDefined();
  });

  it('프로필 이미지 이름은 최대 제한 길이보다 길면 안된다.', () => {
    expect(() => new ProfileImageName(TOO_LONG_PROFILE_IMAGE_NAME)).toThrow(
      ProfileImageNameTooLongError,
    );
  });

  it('프로필 이미지 이름은 최소 제한 길이보다 길어야 한다.', () => {
    expect(() => new ProfileImageName(TOO_SHORT_PROFILE_IMAGE_NAME)).toThrow(
      ProfileImageNameTooShortError,
    );
  });
});
