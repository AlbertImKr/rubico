import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { TestDatabaseService } from './database.e2e.service';
import { TestingModule } from '@nestjs/testing';
import { TestConstants } from '../src/shared/test-utils/test.constants';
import { createE2eTestModule } from './e2e-test.utils';

describe('UserAccountController', () => {
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

  describe('회원 정보 수정', () => {
    it('/user-account/info (PUT)', async () => {
      await request(app.getHttpServer())
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
  });

  describe('비밀번호 변경', () => {
    it('/user-account/password (PUT)', async () => {
      await request(app.getHttpServer())
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
    it('/user-account (DELETE)', async () => {
      await request(app.getHttpServer())
        .delete('/user-account')
        .set('Authorization', `Bearer ${userToken}`)
        .expect(204);
    });
  });

  describe('회원 정보 조회', () => {
    it('/user-account (GET)', async () => {
      await request(app.getHttpServer())
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
