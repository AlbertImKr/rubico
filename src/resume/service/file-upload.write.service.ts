import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';
import { ObjectId } from 'mongodb';
import { ProfileImageWriteService } from './profile-image.write.service';
import { ProfileImageRegisterData } from '../dto/profile-image.data.dto';
import { ProfileImageName } from '../../shared/models/profile-image-name.model';
import { CustomMimeType } from '../types/mine-type.types';
import { Link } from '../../shared/models/link.model';
import { createS3UploadParams } from '../../shared/providers/aws-s3/s3-upload.utils';
import { IdResponse } from '../../shared/utils/response.dto';

@Injectable()
export class FileUploadWriteService {
  readonly bucketName: string;

  constructor(
    @Inject('AWS_S3') private readonly fileUploadSolution: AWS.S3,
    private configService: ConfigService,
    private readonly profileImageWriteService: ProfileImageWriteService,
  ) {
    this.bucketName = this.configService.get<string>('AWS_S3_BUCKET_NAME');
  }

  async uploadProfileImage(
    file: Express.Multer.File,
    userId: ObjectId,
  ): Promise<IdResponse> {
    const params: AWS.S3.PutObjectRequest = createS3UploadParams(
      userId,
      file,
      this.bucketName,
    );
    const response: AWS.S3.ManagedUpload.SendData =
      await this.fileUploadSolution.upload(params).promise();
    if (!response) {
      throw new Error('File upload failed');
    }
    const profileImageId: ObjectId = await this.saveProfileImage(
      file,
      response,
      userId,
    );
    return { id: profileImageId.toString() };
  }

  private async saveProfileImage(
    file: Express.Multer.File,
    response: AWS.S3.ManagedUpload.SendData,
    userId: ObjectId,
  ): Promise<ObjectId> {
    const profileImageRegisterData: ProfileImageRegisterData = {
      name: new ProfileImageName(file.originalname),
      mimeType: file.mimetype as CustomMimeType,
      link: new Link(response.Location),
      userId,
    };
    return this.profileImageWriteService.register(profileImageRegisterData);
  }
}
