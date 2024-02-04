import { Injectable } from '@nestjs/common';
import { ResumeRegisterData } from '../dto/resume.data.dto';
import { DataSource, QueryRunner } from 'typeorm';
import { Transactional } from '../../shared/decorators/transactional.decorator';
import { ObjectId } from 'mongodb';
import { ProfileImageWriteService } from './profile-image.write.service';
import { ResumeEntityEntity } from '../entities/resume.entity';
import { Resume } from '../domain/resume.domain';
import { ProfileImage } from '../domain/profile_image.domain';

@Injectable()
export class ResumeWriteService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly profileImageService: ProfileImageWriteService,
  ) {}

  @Transactional()
  async register(
    data: ResumeRegisterData,
    queryRunner?: QueryRunner,
  ): Promise<ResumeEntityEntity> {
    const profileImageId = data.profileImageId;

    await this.profileImageService.validateExists(profileImageId);
    const profileImage: ProfileImage =
      await this.profileImageService.findById(profileImageId);
    const resumeId = new ObjectId();
    const createdAt = new Date();

    const resume: Resume = {
      id: resumeId,
      createdAt,
      updatedAt: createdAt,
      userAccountId: data.userAccountId,
      address: data.address,
      briefIntroduction: data.briefIntroduction,
      email: data.email,
      name: data.name,
      occupation: data.occupation,
      phoneNumber: data.phoneNumber,
      profileImage: profileImage,
      portfolioFiles: [],
      portfolioLinks: [],
      projectExperiences: [],
      interestsFields: [],
      technicalSkills: [],
      workExperiences: [],
      deletedAt: null,
    };
    return queryRunner.manager.save(ResumeEntityEntity.from(resume));
  }
}
