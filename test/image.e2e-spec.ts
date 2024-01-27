import { INestApplication } from '@nestjs/common';
import { TestDatabaseService } from './database.e2e.service';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app/app.module';
import * as request from 'supertest';
import { EXCEPTION_MESSAGES } from '../src/shared/exception/exception-messages.constants';

describe('이미지 E2E 테스트', () => {
  let app: INestApplication;
  let testDatabaseService: TestDatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [TestDatabaseService],
    }).compile();

    app = module.createNestApplication();
    testDatabaseService = module.get<TestDatabaseService>(TestDatabaseService);
    await app.init();
    await testDatabaseService.clearAll();
  });

  describe('/profile-image (POST) 이미지 업로드', () => {
    it('성공', async () => {
      const response = await request(app.getHttpServer())
        .post('/profile-image')
        .attach('image', __dirname + '/assets/test-image.png');

      expect(response.status).toBe(201);
    });

    it('실패 - 이미지 파일이 아님', async () => {
      const response = await request(app.getHttpServer())
        .post('/profile-image')
        .attach('image', __dirname + '/assets/test.txt');

      expect(response.status).toBe(400);
      expect(response.body.message).toBe(
        EXCEPTION_MESSAGES.PROFILE_IMAGE_IS_NOT_IMAGE,
      );
    });

    it('실패 - 이미지 파일이 너무 큼', async () => {
      const response = await request(app.getHttpServer())
        .post('/profile-image')
        .attach('image', __dirname + '/assets/test-large-image.png');

      expect(response.status).toBe(400);
      expect(response.body.message).toBe(
        EXCEPTION_MESSAGES.PROFILE_IMAGE_IS_TOO_LARGE,
      );
    });
  });
});
