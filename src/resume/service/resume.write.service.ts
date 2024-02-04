import { Injectable } from '@nestjs/common';
import { ResumeRegisterData } from '../dto/resume.data.dto';
import { DataSource, QueryRunner } from 'typeorm';
import { Transactional } from '../../shared/decorators/transactional.decorator';
import { ProfileImageWriteService } from './profile-image.write.service';
import { ResumeEntity } from '../entities/resume.entity';
import { Resume } from '../domain/resume.domain';
import { ProfileImage } from '../domain/profile_image.domain';
import { ResumeDomainFactory } from '../utils/resume.domain.factory';
import { ResumeTransformer } from '../transformers/resume.domain.transformer';

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
  ): Promise<Resume> {
    const profileImageId = data.profileImageId;
    const profileImage: ProfileImage =
      await this.profileImageService.findById(profileImageId);
    const resume: Resume = ResumeDomainFactory.createResume(data, profileImage);
    return await this.save(resume, queryRunner);
  }

  @Transactional()
  public async save(resume: Resume, queryRunner?: QueryRunner) {
    const resumeEntity: ResumeEntity = await queryRunner.manager.save(
      ResumeEntity,
      ResumeTransformer.toEntity(resume),
    );
    return ResumeTransformer.fromEntity(resumeEntity);
  }
}
