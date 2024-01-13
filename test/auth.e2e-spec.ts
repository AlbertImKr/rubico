import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { config } from 'dotenv';
import { AppModule } from '../src/app/app.module';
import { TestDatabaseService } from './database.e2e.service';

config({ path: '.env.test' });

describe('AuthController', () => {
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

  describe('회원가입', () => {
    it('/auth/signup (POST)', async () => {
      return request(app.getHttpServer()).post('/auth/signup').send({
        nickname: 'test',
        email: 'john@example.co',
        address: 'test address',
        phoneNumber: '010-1234-5678',
        password: 'Password1!',
      });
    });
  });

  describe('로그인', () => {
    beforeEach(async () => {
      return request(app.getHttpServer()).post('/auth/signup').send({
        nickname: 'test11',
        email: 'john@example.com',
        address: 'test address',
        phoneNumber: '010-1234-5678',
        password: 'Password1!',
      });
    });

    it('/auth/login (POST)', async () => {
      return request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: 'john@example.com',
          password: 'Password1!',
        })
        .expect(200);
    });
  });

  afterEach(async () => {
    await app.close();
  });
});
