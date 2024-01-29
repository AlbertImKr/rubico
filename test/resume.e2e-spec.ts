import { INestApplication } from '@nestjs/common';
import { TestDatabaseService } from './database.e2e.service';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app/app.module';
import * as request from 'supertest';
import { TestConstants } from '../src/shared/test-utils/test.constants';

describe('ResumeController', () => {
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

  describe('이력서 등록', () => {
    let userToken: string;
    let profileImageId: string;

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

      const profileImageResponse = await request(app.getHttpServer())
        .post('/files/profile-image')
        .set('Authorization', `Bearer ${userToken}`)
        .attach('image', TestConstants.PROFILE_IMAGE_FILE_PATH);
      profileImageId = profileImageResponse.body.id;
    });

    it('/resume (POST)', async () => {
      return request(app.getHttpServer())
        .post('/resume')
        .set('Authorization', `Bearer ${userToken}`)
        .send({
          name: 'test',
          email: 'test@email.com',
          phoneNumber: '123-4567-8901',
          address: '인천시 연수구 송도동',
          occupation: '백엔드 개발자',
          briefIntroduction: '안녕하세요. 저는 백엔드 개발자입니다.',
          profileImageId: profileImageId,
          portfolio_files: ['https://test.com', 'https://test2.com'],
          portfolio_links: ['https://test3.com', 'https://test4.com'],
          projectExperiences: [
            {
              projectName: 'project1',
              organizationName: 'organization1',
              processStatus: '진행중',
              projectDescription: '프로젝트 설명',
              startedAt: new Date(),
              endedAt: new Date(),
            },
            {
              projectName: 'project2',
              organizationName: 'organization2',
              processStatus: '완료',
              projectDescription: '프로젝트 설명',
              startedAt: new Date(),
              endedAt: new Date(),
            },
          ],
          workExperiences: [
            {
              companyName: 'company1',
              department: 'department1',
              description: 'description1',
              employmentType: '정규직',
              position: 'position1',
              startedAt: new Date(),
              endedAt: new Date(),
            },
            {
              companyName: 'company2',
              department: 'department2',
              description: 'description2',
              employmentType: '정규직',
              position: 'position2',
              startedAt: new Date(),
              endedAt: new Date(),
            },
          ],
          fieldOfInterestIds: [
            '60b0f7b9e6b3f3b3e8b0e0a1',
            '60b0f7b9e6b3f3b3e8b0e0a2',
            '60b0f7b9e6b3f3b3e8b0e0a3',
          ],
        })
        .expect(201);
    });
  });

  afterEach(async () => {
    await app.close();
  });
});
