import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { DataSource, QueryRunner } from 'typeorm';
import { Transactional } from '../../shared/decorators/transactional.decorator';
import { ProfileImageRegisterData } from '../dto/profile-image.data.dto';
import { ProfileImage } from '../entities/profile_image.entity';

@Injectable()
export class ProfileImageWriteService {
  constructor(private readonly dataSource: DataSource) {}

  @Transactional()
  async register(data: ProfileImageRegisterData, queryRunner?: QueryRunner) {
    const createdAt = new Date();
    const newProfileImage: ProfileImage = queryRunner.manager.create(
      ProfileImage,
      {
        ...data,
        id: new ObjectId(),
        createdAt: createdAt,
        updatedAt: createdAt,
      },
    );
    return queryRunner.manager.save(newProfileImage);
  }

  @Transactional()
  async findById(
    id: ObjectId,
    queryRunner?: QueryRunner,
  ): Promise<ProfileImage> {
    const profileImage: ProfileImage = await queryRunner.manager.findOneBy(
      ProfileImage,
      {
        id: id,
      },
    );
    if (!profileImage) {
      throw new Error('ProfileImage not found');
    }
    return profileImage;
  }
}
