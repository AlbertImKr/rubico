import { Module } from '@nestjs/common';
import { ResumeWriteController } from './controller/resume.write.controller';
import { ResumeWriteService } from './service/resume.write.service';
import { ResumeEntity } from './entities/resume.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileImageWriteController } from './controller/profile-image.write.controller';
import { ProfileImageEntity } from './entities/profile_image.entity';
import { FileUploadWriteController } from './controller/file-upload.write.controller';
import { FileUploadWriteService } from './service/file-upload.write.service';
import { ProfileImageWriteService } from './service/profile-image.write.service';
import { S3Provider } from '../shared/providers/aws-s3/aws-s3.provider';

@Module({
  imports: [TypeOrmModule.forFeature([ResumeEntity, ProfileImageEntity])],
  controllers: [
    ResumeWriteController,
    ProfileImageWriteController,
    FileUploadWriteController,
  ],
  providers: [
    ResumeWriteService,
    ProfileImageWriteService,
    FileUploadWriteService,
    S3Provider,
  ],
})
export class ResumeModule {}
