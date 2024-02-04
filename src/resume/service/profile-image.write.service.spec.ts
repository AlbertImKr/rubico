import { Test, TestingModule } from '@nestjs/testing';
import {
  MockDataSourceProvider,
  mockEntityManager,
} from '../../shared/test-utils/test.utils';
import { ProfileImageWriteService } from './profile-image.write.service';
import { ProfileImageRegisterData } from '../dto/profile-image.data.dto';
import { ProfileImageName } from '../../shared/models/profile-image-name.model';
import { CustomMimeType } from '../types/mine-type.types';
import { Link } from '../../shared/models/link.model';
import { ObjectId } from 'mongodb';
import { ProfileImageEntity } from '../entities/profile_image.entity';

describe('ProfileImageWriteService', () => {
  let profileImageWriteService: ProfileImageWriteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfileImageWriteService, MockDataSourceProvider],
    }).compile();

    profileImageWriteService = module.get<ProfileImageWriteService>(
      ProfileImageWriteService,
    );
  });

  it('should be defined', () => {
    expect(profileImageWriteService).toBeDefined();
  });

  it('profileImage를 저장한다.', async () => {
    // given
    const profileImageRegisterData: ProfileImageRegisterData = {
      name: new ProfileImageName('test'),
      mimeType: 'image/png' as CustomMimeType,
      link: new Link('https://test.com'),
      userId: new ObjectId(),
    };
    const profileImage: ProfileImageEntity = {
      ...profileImageRegisterData,
      id: new ObjectId().toHexString(),
      name: profileImageRegisterData.name.value,
      link: profileImageRegisterData.link.value,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    };
    jest.spyOn(mockEntityManager, 'save').mockResolvedValueOnce(profileImage);

    // when
    const response: ObjectId = await profileImageWriteService.register(
      profileImageRegisterData,
    );

    // then
    expect(mockEntityManager.save).toHaveBeenCalledTimes(1);
    expect(response.toHexString()).toEqual(profileImage.id);
  });
});
