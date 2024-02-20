import { ObjectId } from 'mongodb';
import { ResumeRegisterRequestDto } from '../dto/resume.request.dto';
import {
  ProjectExperienceDataTransformer,
  ResumeRegisterDataTransformer,
  WorkExperienceDataTransformer,
} from './resume.dto.transformer';

describe('ResumeRegisterDataTransformer', () => {
  it('ResumeRegisterRequestDto를 ResumeRegisterData로 변환한다.', () => {
    // given
    const resumeRegisterRequest: ResumeRegisterRequestDto = {
      name: '홍길동',
      email: 'email@email.com',
      phoneNumber: '010-1234-5678',
      address: '서울특별시 강남구',
      occupation: '백엔드 개발자',
      briefIntroduction: '안녕하세요. 홍길동입니다.',
      profileImageId: '60b0f7b9e6b3f3b3e8b0e0a0',
      fieldOfInterestIds: [
        '60b0f7b9e6b3f3b3e8b0e0a1',
        '60b0f7b9e6b3f3b3e8b0e0a2',
      ],
    };
    const userAccountId = new ObjectId();

    // when
    const resumeRegisterData = ResumeRegisterDataTransformer.from(
      resumeRegisterRequest,
      userAccountId,
    );

    // then
    expect(resumeRegisterData.userAccountId).toBe(userAccountId);
    expect(resumeRegisterData.name.value).toStrictEqual('홍길동');
    expect(resumeRegisterData.email.value).toBe(resumeRegisterRequest.email);
    expect(resumeRegisterData.phoneNumber.value).toBe(
      resumeRegisterRequest.phoneNumber,
    );
    expect(resumeRegisterData.address.value).toBe(
      resumeRegisterRequest.address,
    );
    expect(resumeRegisterData.occupation.value).toBe(
      resumeRegisterRequest.occupation,
    );
    expect(resumeRegisterData.briefIntroduction.value).toBe(
      resumeRegisterRequest.briefIntroduction,
    );
    expect(resumeRegisterData.profileImageId.toHexString()).toBe(
      resumeRegisterRequest.profileImageId,
    );
    expect(resumeRegisterData.fieldOfInterestIds[0].toHexString()).toBe(
      resumeRegisterRequest.fieldOfInterestIds[0],
    );
    expect(resumeRegisterData.fieldOfInterestIds[1].toHexString()).toBe(
      resumeRegisterRequest.fieldOfInterestIds[1],
    );
  });
});

describe('ProjectExperienceDataTransformer', () => {
  it('ProjectExperienceRequestDto를 ProjectExperienceData로 변환한다.', () => {
    // given
    const projectExperienceRequest = {
      projectName: '프로젝트 이름',
      organizationName: '기관 이름',
      processStatus: '진행 중',
      projectDescription: '프로젝트 설명',
      startedAt: new Date(),
      endedAt: new Date(),
    };

    // when
    const projectExperienceData = ProjectExperienceDataTransformer.from(
      projectExperienceRequest,
    );

    // then
    expect(projectExperienceData.projectName.value).toBe(
      projectExperienceRequest.projectName,
    );
    expect(projectExperienceData.organizationName.value).toBe(
      projectExperienceRequest.organizationName,
    );
    expect(projectExperienceData.processStatus).toBe(
      projectExperienceRequest.processStatus,
    );
    expect(projectExperienceData.projectDescription.value).toBe(
      projectExperienceRequest.projectDescription,
    );
    expect(projectExperienceData.startedAt).toBe(
      projectExperienceRequest.startedAt,
    );
    expect(projectExperienceData.endedAt).toBe(
      projectExperienceRequest.endedAt,
    );
  });
});

describe('WorkExperienceDataTransformer', () => {
  it('WorkExperienceRequestDto를 WorkExperienceData로 변환한다.', () => {
    // given
    const workExperienceRequest = {
      companyName: '회사 이름',
      department: '부서 이름',
      description: '업무 설명',
      employmentType: '정규직',
      position: '직급',
      startedAt: new Date(),
      endedAt: new Date(),
    };

    // when
    const workExperienceData = WorkExperienceDataTransformer.from(
      workExperienceRequest,
    );

    // then
    expect(workExperienceData.companyName.value).toBe(
      workExperienceRequest.companyName,
    );
    expect(workExperienceData.department.value).toBe(
      workExperienceRequest.department,
    );
    expect(workExperienceData.description.value).toBe(
      workExperienceRequest.description,
    );
    expect(workExperienceData.employmentType).toBe(
      workExperienceRequest.employmentType,
    );
    expect(workExperienceData.position.value).toBe(
      workExperienceRequest.position,
    );
    expect(workExperienceData.startedAt).toBe(workExperienceRequest.startedAt);
    expect(workExperienceData.endedAt).toBe(workExperienceRequest.endedAt);
  });
});
