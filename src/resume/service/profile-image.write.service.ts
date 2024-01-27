import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { DataSource, QueryRunner } from 'typeorm';
import { Transactional } from '../../shared/decorators/transactional.decorator';

@Injectable()
export class ProfileImageWriteService {
  constructor(private readonly dataSource: DataSource) {}

  @Transactional()
  async register(
    profileImageUrl: string,
    mineType: string,
    userId: ObjectId,
    queryRunner?: QueryRunner,
  ) {
    const createdAt = new Date();
    const newProfileImage = queryRunner.manager.create('ProfileImage', {
      link: profileImageUrl,
      name: profileImageUrl.split('/').pop(),
      mimeType: mineType,
      userId,
      id: new ObjectId(),
      createdAt: createdAt,
      updatedAt: createdAt,
    });
    return queryRunner.manager.save(newProfileImage);
  }
}
