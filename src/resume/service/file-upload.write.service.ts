import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';
import { ObjectId } from 'mongodb';
import { ProfileImageWriteService } from './profile-image.write.service';

@Injectable()
export class FileUploadWriteService {
  constructor(
    @Inject('AWS_S3') private readonly fileUploadSolution: AWS.S3,
    private configService: ConfigService,
    private readonly profileImageWriteService: ProfileImageWriteService,
  ) {}

  async writeFileUpload(file: Express.Multer.File, userId: ObjectId) {
    const fileKey = `${userId}/profileImage/${file.originalname}`;
    const params: AWS.S3.PutObjectRequest = {
      Bucket: this.configService.get<string>('AWS_S3_BUCKET_NAME'),
      Key: fileKey,
      Body: file.buffer,
      ContentType: file.mimetype,
    };
    const response = await this.fileUploadSolution.upload(params).promise();
    if (!response) {
      throw new Error('File upload failed');
    }
    this.profileImageWriteService.register(
      response.Location,
      file.mimetype,
      userId,
    );
  }
}
