import * as AWS from 'aws-sdk';
import { ObjectId } from 'mongodb';
import { Express } from 'express';

export function createS3UploadParams(
  userId: ObjectId,
  file: Express.Multer.File,
  bucketName: string,
): AWS.S3.PutObjectRequest {
  const fileKey = `${userId}/profileImage/${file.originalname}`;
  return {
    Bucket: bucketName,
    Key: fileKey,
    Body: file.buffer,
    ContentType: file.mimetype,
  };
}
