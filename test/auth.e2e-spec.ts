import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app/app.module';
import { TestDatabaseService } from './database.e2e.service';
import { TestConstants } from '../src/shared/test-utils/test.constants';

describe('AuthController', () => {
  let app: INestApplication;
  let testDatabaseService: TestDatabaseService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [TestDatabaseService],
    }).compile();

    app = module.createNestApplication();
    await app.init();
    testDatabaseService = module.get<TestDatabaseService>(TestDatabaseService);
  });

  beforeEach(async () => {
    await testDatabaseService.clearAll();
  });

  afterEach(async () => {
    await testDatabaseService.clearAll();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('회원가입', () => {
    it('/auth/signup (POST)', async () => {
      const response = await request(app.getHttpServer())
        .post('/auth/signup')
        .send(TestConstants.SIGN_UP_REQUEST_BODY);

      expect(response.body).toHaveProperty('accessToken');
      expect(response.body).toHaveProperty('refreshToken');
    });
  });

  describe('로그인', () => {
    beforeEach(async () => {
      await request(app.getHttpServer())
        .post('/auth/signup')
        .send(TestConstants.SIGN_UP_REQUEST_BODY);
    });

    it('/auth/login (POST)', async () => {
      const response = await request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: TestConstants.USER_EMAIL,
          password: TestConstants.USER_PASSWORD,
        });

      expect(response.body).toHaveProperty('accessToken');
      expect(response.body).toHaveProperty('refreshToken');
    });
  });
});
