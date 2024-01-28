import { Injectable } from '@nestjs/common';
import { ResumeRegisterData } from '../dto/resume.data.dto';
import { DataSource, QueryRunner } from 'typeorm';
import { Transactional } from '../../shared/decorators/transactional.decorator';
import { ObjectId } from 'mongodb';
import { ProfileImageWriteService } from './profile-image.write.service';
import { Resume } from '../entities/resume.entity';

@Injectable()
export class ResumeWriteService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly profileImageWriteService: ProfileImageWriteService,
  ) {}

  @Transactional()
  async create(data: ResumeRegisterData, queryRunner?: QueryRunner) {
    const profileImage = await this.profileImageWriteService.findById(
      data.profileImageId,
    );
    const id = new ObjectId();
    const createdAt = new Date();
    const resume = queryRunner.manager.create(Resume, {
      ...data,
      id,
      createdAt,
      updatedAt: createdAt,
      profileImage,
      portfolioLinks: [],
      workExperiences: [],
      projectExperiences: [],
    });
    return queryRunner.manager.save(resume);
  }
}
