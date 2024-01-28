import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';

export const S3Provider = {
  provide: 'AWS_S3',
  useFactory: (configService: ConfigService): AWS.S3 => {
    const accessKeyId = configService.get<string>('AWS_S3_ACCESS_KEY_ID');
    const secretAccessKey = configService.get<string>(
      'AWS_S3_SECRET_ACCESS_KEY',
    );
    const region = configService.get<string>('AWS_S3_REGION');

    return new AWS.S3({
      accessKeyId,
      secretAccessKey,
      region,
    });
  },
  inject: [ConfigService],
};
