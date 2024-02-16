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
import { ProfileImageIsNotFoundError } from '../../shared/exception/error/profile-image.error';
import { ProfileImage } from '../domain/profile_image.domain';

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

  describe('profileImage를 조회한다.', () => {
    it('profileImage가 존재하지 않는다.', async () => {
      // given
      const profileImageId = new ObjectId();
      jest
        .spyOn(mockEntityManager, 'findOneBy')
        .mockResolvedValueOnce(undefined);

      // when
      const result: Promise<ProfileImage> =
        profileImageWriteService.findById(profileImageId);

      // then
      expect(result).rejects.toThrow(ProfileImageIsNotFoundError);
    });

    it('profileImage가 존재한다.', async () => {
      // given
      const profileImageId = new ObjectId();
      const profileImage: ProfileImageEntity = {
        id: profileImageId.toHexString(),
        name: 'test',
        mimeType: 'image/png',
        link: 'https://test.com',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      };
      jest
        .spyOn(mockEntityManager, 'findOneBy')
        .mockClear()
        .mockResolvedValueOnce(profileImage);

      // when
      await profileImageWriteService.findById(profileImageId);

      // then
      expect(mockEntityManager.findOneBy).toHaveBeenCalledTimes(1);
    });
  });

  describe('profileImage가 존재하는지 확인한다.', () => {
    it('profileImage가 존재한다.', async () => {
      // given
      const profileImageId = new ObjectId();
      jest.spyOn(mockEntityManager, 'existsBy').mockResolvedValueOnce(true);

      // when
      const result: boolean =
        await profileImageWriteService.existsById(profileImageId);

      // then
      expect(result).toBeTruthy();
    });

    it('profileImage가 존재하지 않는다.', async () => {
      // given
      const profileImageId = new ObjectId();
      jest
        .spyOn(mockEntityManager, 'existsBy')
        .mockClear()
        .mockResolvedValueOnce(false);

      // when
      const result: boolean =
        await profileImageWriteService.existsById(profileImageId);

      // then
      expect(result).toBeFalsy();
    });
  });

  describe('profileImage의 아이디가 유효한지 검증한다.', () => {
    it('profileImage가 존재한다.', async () => {
      // given
      const profileImageId = new ObjectId();
      jest
        .spyOn(profileImageWriteService, 'existsById')
        .mockResolvedValueOnce(true);

      // when
      await profileImageWriteService.validateExists(profileImageId);

      // then
      expect(profileImageWriteService.existsById).toHaveBeenCalledTimes(1);
    });

    it('profileImage가 존재하지 않는다.', async () => {
      // given
      const profileImageId = new ObjectId();
      jest
        .spyOn(profileImageWriteService, 'existsById')
        .mockResolvedValueOnce(false);
      // when
      const result: Promise<void> =
        profileImageWriteService.validateExists(profileImageId);
      // then
      await expect(result).rejects.toThrow(ProfileImageIsNotFoundError);
    });
  });
});
