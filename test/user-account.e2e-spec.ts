import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { TestDatabaseService } from './database.e2e.service';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app/app.module';
import { TestConstants } from '../src/shared/test-utils/test.constants';

describe('UserAccountController', () => {
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

  describe('회원 정보 수정', () => {
    let userToken: string;

    beforeEach(async () => {
      const response = await request(app.getHttpServer())
        .post('/auth/signup')
        .send({
          nickname: TestConstants.USER_NICKNAME,
          email: TestConstants.USER_EMAIL,
          address: TestConstants.USER_ADDRESS,
          phoneNumber: TestConstants.USER_PHONE_NUMBER,
          password: TestConstants.USER_PASSWORD,
        });

      userToken = response.body.accessToken;
      expect(userToken).toBeDefined();
    });

    it('/user-account/info (PUT)', async () => {
      return request(app.getHttpServer())
        .put('/user-account/info')
        .set('Authorization', `Bearer ${userToken}`)
        .send({
          nickname: TestConstants.EDIT_USER_NICKNAME,
          address: TestConstants.EDIT_USER_ADDRESS,
          introduction: TestConstants.EDIT_USER_INTRODUCTION,
        })
        .expect(200)
        .expect((res) => {
          expect(res.body.nickname).toBe(TestConstants.EDIT_USER_NICKNAME);
          expect(res.body.address).toBe(TestConstants.EDIT_USER_ADDRESS);
          expect(res.body.introduction).toBe(
            TestConstants.EDIT_USER_INTRODUCTION,
          );
        });
    });

    it('/user-account/password (PUT)', async () => {
      return request(app.getHttpServer())
        .put('/user-account/password')
        .set('Authorization', `Bearer ${userToken}`)
        .send({
          password: TestConstants.USER_PASSWORD,
          newPassword: TestConstants.DIFFERENT_PASSWORD,
        })
        .expect(204);
    });
  });

  describe('회원 탈퇴', () => {
    let userToken: string;

    beforeEach(async () => {
      const response = await request(app.getHttpServer())
        .post('/auth/signup')
        .send({
          nickname: TestConstants.USER_NICKNAME,
          email: TestConstants.USER_EMAIL,
          address: TestConstants.USER_ADDRESS,
          phoneNumber: TestConstants.USER_PHONE_NUMBER,
          password: TestConstants.USER_PASSWORD,
        });

      userToken = response.body.accessToken;
      expect(userToken).toBeDefined();
    });

    it('/user-account (DELETE)', async () => {
      return request(app.getHttpServer())
        .delete('/user-account')
        .set('Authorization', `Bearer ${userToken}`)
        .expect(204);
    });
  });

  describe('회원 정보 조회', () => {
    let userToken: string;

    beforeEach(async () => {
      const response = await request(app.getHttpServer())
        .post('/auth/signup')
        .send({
          nickname: TestConstants.USER_NICKNAME,
          email: TestConstants.USER_EMAIL,
          address: TestConstants.USER_ADDRESS,
          phoneNumber: TestConstants.USER_PHONE_NUMBER,
          password: TestConstants.USER_PASSWORD,
        });

      userToken = response.body.accessToken;
      expect(userToken).toBeDefined();
    });

    it('/user-account (GET)', async () => {
      return request(app.getHttpServer())
        .get('/user-account')
        .set('Authorization', `Bearer ${userToken}`)
        .expect(200)
        .expect((res) => {
          expect(res.body.nickname).toBe(TestConstants.USER_NICKNAME);
          expect(res.body.address).toBe(TestConstants.USER_ADDRESS);
          expect(res.body.introduction).toBe(undefined);
        });
    });
  });
});
