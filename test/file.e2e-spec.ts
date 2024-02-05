import { INestApplication } from '@nestjs/common';
import { TestDatabaseService } from './database.e2e.service';
import { TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { EXCEPTION_MESSAGES } from '../src/shared/exception/exception-messages.constants';
import { TestConstants } from '../src/shared/test-utils/test.constants';
import { createE2eTestModule } from './e2e-test.utils';

describe('파일 E2E 테스트', () => {
  let app: INestApplication;
  let testDatabaseService: TestDatabaseService;
  let userToken: string;

  beforeAll(async () => {
    const module: TestingModule = await createE2eTestModule();
    app = module.createNestApplication();
    await app.init();
    testDatabaseService = module.get<TestDatabaseService>(TestDatabaseService);
  });

  beforeEach(async () => {
    await testDatabaseService.clearAll();

    const response = await request(app.getHttpServer())
      .post('/auth/signup')
      .send(TestConstants.SIGN_UP_REQUEST_BODY);
    userToken = response.body.accessToken;
    expect(userToken).toBeDefined();
  });

  afterEach(async () => {
    await testDatabaseService.clearAll();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('/profile-image (POST) 이미지 업로드', () => {
    it('성공', async () => {
      const response = await request(app.getHttpServer())
        .post('/files/profile-image')
        .set('Authorization', `Bearer ${userToken}`)
        .attach('image', TestConstants.PROFILE_IMAGE_FILE_PATH);

      expect(response.status).toBe(201);
    });

    it('실패 - 이미지 파일이 아님', async () => {
      const response = await request(app.getHttpServer())
        .post('/files/profile-image')
        .set('Authorization', `Bearer ${userToken}`)
        .attach('image', TestConstants.PROFILE_IMAGE_FILE_PATH_NOT_IMAGE);

      expect(response.status).toBe(400);
      expect(response.body.message).toBe(
        EXCEPTION_MESSAGES.PROFILE_IMAGE_IS_NOT_IMAGE,
      );
    });

    it('실패 - 이미지 파일이 너무 큼', async () => {
      const response = await request(app.getHttpServer())
        .post('/files/profile-image')
        .set('Authorization', `Bearer ${userToken}`)
        .attach('image', TestConstants.PROFILE_IMAGE_FILE_PATH_TOO_LARGE);

      expect(response.status).toBe(400);
      expect(response.body.message).toBe(
        EXCEPTION_MESSAGES.PROFILE_IMAGE_IS_TOO_LARGE,
      );
    });
  });

  describe('/portfolio-file (POST) 포트폴리오 파일 업로드', () => {
    it('성공', async () => {
      const response = await request(app.getHttpServer())
        .post('/files/portfolio-file')
        .set('Authorization', `Bearer ${userToken}`)
        .attach('portfolioFile', TestConstants.PORTFOLIO_FILE_PATH);

      expect(response.status).toBe(201);
    });

    it('실패 - PDF 파일이 아님', async () => {
      const response = await request(app.getHttpServer())
        .post('/files/portfolio-file')
        .set('Authorization', `Bearer ${userToken}`)
        .attach('portfolioFile', TestConstants.PORTFOLIO_FILE_PATH_NOT_PDF);

      expect(response.status).toBe(400);
      expect(response.body.message).toBe(
        EXCEPTION_MESSAGES.PORTFOLIO_FILE_IS_NOT_PDF,
      );
    });

    it('실패 - 파일이 너무 큼', async () => {
      const response = await request(app.getHttpServer())
        .post('/files/portfolio-file')
        .set('Authorization', `Bearer ${userToken}`)
        .attach('portfolioFile', TestConstants.PORTFOLIO_FILE_PATH_TOO_LARGE);

      expect(response.status).toBe(400);
      expect(response.body.message).toBe(
        EXCEPTION_MESSAGES.PORTFOLIO_FILE_IS_TOO_LARGE,
      );
    });
  });
});
