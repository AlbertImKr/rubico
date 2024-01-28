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
import { ProfileImage } from '../entities/profile_image.entity';

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
    const profileImage: ProfileImage = {
      ...profileImageRegisterData,
      id: new ObjectId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    };
    jest.spyOn(mockEntityManager, 'create').mockReturnValue([profileImage]);
    jest.spyOn(mockEntityManager, 'save').mockResolvedValueOnce(undefined);

    // when
    await profileImageWriteService.register(profileImageRegisterData);

    // then
    expect(mockEntityManager.create).toHaveBeenCalledWith(ProfileImage, {
      ...profileImageRegisterData,
      id: expect.any(ObjectId),
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });
    expect(mockEntityManager.save).toHaveBeenCalledWith(
      expect.arrayContaining([profileImage]),
    );
  });
});
