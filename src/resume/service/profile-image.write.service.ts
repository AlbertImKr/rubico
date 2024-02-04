import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { DataSource, QueryRunner } from 'typeorm';
import { Transactional } from '../../shared/decorators/transactional.decorator';
import { ProfileImageRegisterData } from '../dto/profile-image.data.dto';
import { ProfileImageEntity } from '../entities/profile_image.entity';
import { ProfileImageIsNotFoundError } from '../../shared/exception/error/profile-image.error';
import { ProfileImage } from '../domain/profile_image.domain';
import { ProfileImageDomainFactory } from '../utils/profile-image.domain.factory';
import { ProfileImageTransformer } from '../transformers/resume.domain.transformer';

@Injectable()
export class ProfileImageWriteService {
  constructor(private readonly dataSource: DataSource) {}

  @Transactional()
  async register(
    data: ProfileImageRegisterData,
    queryRunner?: QueryRunner,
  ): Promise<ObjectId> {
    const profileImage: ProfileImage =
      ProfileImageDomainFactory.createProfileImage(data);
    return await this.save(profileImage, queryRunner);
  }

  @Transactional()
  private async save(profileImage: ProfileImage, queryRunner?: QueryRunner) {
    const profileImageEntity: ProfileImageEntity =
      await queryRunner.manager.save(
        ProfileImageEntity,
        ProfileImageTransformer.toEntity(profileImage),
      );
    return ProfileImageTransformer.fromEntity(profileImageEntity).id;
  }

  @Transactional()
  async findById(
    id: ObjectId,
    queryRunner?: QueryRunner,
  ): Promise<ProfileImage> {
    const profileImage: ProfileImageEntity =
      await queryRunner.manager.findOneBy(ProfileImageEntity, {
        id: id.toHexString(),
      });
    if (profileImage) {
      return ProfileImageTransformer.fromEntity(profileImage);
    }
    throw new ProfileImageIsNotFoundError();
  }

  @Transactional()
  async validateExists(id: ObjectId, queryRunner?: QueryRunner): Promise<void> {
    if (this.existsById(id, queryRunner)) {
      return;
    }
    throw new ProfileImageIsNotFoundError();
  }

  @Transactional()
  async existsById(id: ObjectId, queryRunner?: QueryRunner): Promise<boolean> {
    return queryRunner.manager.existsBy(ProfileImageEntity, {
      id: id.toHexString(),
    });
  }
}
