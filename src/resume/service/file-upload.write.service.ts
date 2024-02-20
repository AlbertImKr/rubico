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
import { ProfileImageUploadFailedError } from '../../shared/exception/error/profile-image.error';
import { PortfolioFileWriteService } from './portfolio-file.write.service';
import { PortfolioFileRegisterData } from '../dto/portfolio-file.data.dto';

@Injectable()
export class FileUploadWriteService {
  readonly bucketName: string;

  constructor(
    @Inject('AWS_S3') private readonly fileUploadSolution: AWS.S3,
    private configService: ConfigService,
    private readonly profileImageWriteService: ProfileImageWriteService,
    private readonly profileFileWriteService: PortfolioFileWriteService,
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
      await this.uploadFile(params);
    const profileImageId: ObjectId = await this.saveProfileImage(
      file,
      response,
      userId,
    );
    return { id: profileImageId.toString() };
  }

  async uploadPortfolioFile(
    file: Express.Multer.File,
    userId: ObjectId,
  ): Promise<IdResponse> {
    const params: AWS.S3.PutObjectRequest = createS3UploadParams(
      userId,
      file,
      this.bucketName,
    );
    const response: AWS.S3.ManagedUpload.SendData =
      await this.uploadFile(params);
    const portfolioFileId: ObjectId = await this.savePortfolioFile(
      file,
      response,
      userId,
    );
    return { id: portfolioFileId.toString() };
  }

  async uploadFile(
    params: AWS.S3.PutObjectRequest,
  ): Promise<AWS.S3.ManagedUpload.SendData> {
    const response: AWS.S3.ManagedUpload.SendData =
      await this.fileUploadSolution
        .upload(params, (error) => {
          if (error) {
            throw new ProfileImageUploadFailedError();
          }
        })
        .promise();
    return response;
  }

  private async saveProfileImage(
    file: Express.Multer.File,
    response: AWS.S3.ManagedUpload.SendData,
    userId: ObjectId,
  ): Promise<ObjectId> {
    const data: ProfileImageRegisterData = {
      name: new ProfileImageName(file.originalname),
      mimeType: file.mimetype as CustomMimeType,
      link: new Link(response.Location),
      userId,
    };
    return this.profileImageWriteService.register(data);
  }

  private async savePortfolioFile(
    file: Express.Multer.File,
    response: AWS.S3.ManagedUpload.SendData,
    userId: ObjectId,
  ): Promise<ObjectId> {
    const data: PortfolioFileRegisterData = {
      name: new ProfileImageName(file.originalname),
      mimeType: file.mimetype as CustomMimeType,
      link: new Link(response.Location),
      userId,
    };
    return this.profileFileWriteService.register(data);
  }
}
