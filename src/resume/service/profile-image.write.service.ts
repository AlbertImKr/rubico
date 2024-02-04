import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { DataSource, QueryRunner } from 'typeorm';
import { Transactional } from '../../shared/decorators/transactional.decorator';
import { ProfileImageRegisterData } from '../dto/profile-image.data.dto';
import { ProfileImageEntity } from '../entities/profile_image.entity';
import { ProfileImageIsNotFoundError } from '../../shared/exception/error/profile-image.error';
import { ProfileImage } from '../domain/profile_image.domain';

@Injectable()
export class ProfileImageWriteService {
  constructor(private readonly dataSource: DataSource) {}

  @Transactional()
  async register(
    data: ProfileImageRegisterData,
    queryRunner?: QueryRunner,
  ): Promise<ObjectId> {
    const createdAt = new Date();
    const newProfileImage: ProfileImage = {
      id: new ObjectId(),
      createdAt,
      updatedAt: createdAt,
      link: data.link,
      mimeType: data.mimeType,
      name: data.name,
      deletedAt: null,
    };
    const profileImageEntity: ProfileImageEntity =
      await queryRunner.manager.save(ProfileImageEntity.from(newProfileImage));
    return ProfileImageEntity.toDomain(profileImageEntity).id;
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
      return ProfileImageEntity.toDomain(profileImage);
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
