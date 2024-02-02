import { INestApplication } from '@nestjs/common';
import { TestDatabaseService } from './database.e2e.service';
import { TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { TestConstants } from '../src/shared/test-utils/test.constants';
import { createE2eTestModule } from './e2e-test.utils';

describe('ResumeController', () => {
  let app: INestApplication;
  let testDatabaseService: TestDatabaseService;
  let userToken: string;

  beforeAll(async () => {
    const module: TestingModule = await createE2eTestModule();

    app = module.createNestApplication();
    await app.init();
    testDatabaseService = module.get<TestDatabaseService>(TestDatabaseService);

    const response = await request(app.getHttpServer())
      .post('/auth/signup')
      .send(TestConstants.SIGN_UP_REQUEST_BODY);
    userToken = response.body.accessToken;
    expect(userToken).toBeDefined();
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

  describe('이력서 등록', () => {
    let profileImageId: string;

    beforeEach(async () => {
      const profileImageResponse = await request(app.getHttpServer())
        .post('/files/profile-image')
        .set('Authorization', `Bearer ${userToken}`)
        .attach('image', TestConstants.PROFILE_IMAGE_FILE_PATH);
      profileImageId = profileImageResponse.body.id;
    });

    it('/resume (POST)', async () => {
      await request(app.getHttpServer())
        .post('/resume')
        .set('Authorization', `Bearer ${userToken}`)
        .send(profileRegisterRequest(profileImageId))
        .expect(201);
    });
  });
});

function profileRegisterRequest(profileImageId: string): string | object {
  return {
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
  };
}
