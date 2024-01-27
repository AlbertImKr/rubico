import { Injectable } from '@nestjs/common';
import { ResumeRegisterData } from '../dto/resume.data.dto';
import { DataSource, QueryRunner } from 'typeorm';
import { Transactional } from '../../shared/decorators/transactional.decorator';
import { ObjectId } from 'mongodb';

@Injectable()
export class ResumeWriteService {
  constructor(private readonly dataSource: DataSource) {}

  @Transactional()
  async create(data: ResumeRegisterData, queryRunner?: QueryRunner) {
    const id = new ObjectId();
    const createdAt = new Date();
    const profileImage = queryRunner.manager.findOneBy('ProfileImage', {
      where: { id: data.profileImageId },
    });
    const resume = queryRunner.manager.create('Resume', {
      ...data,
      id,
      createdAt,
      updatedAt: createdAt,
      profileImage,
    });
    console.log('resume :>> ', resume);
    return queryRunner.manager.save(resume);
  }
}
