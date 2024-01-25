export class ResumeRegisterRequestDto {
  readonly name: string;
  readonly email: string;
  readonly phoneNumber: string;
  readonly address: string;
  readonly occupation: string;
  readonly briefIntroduction: string;
  readonly profileImageId: string;
  readonly portfolioFileIds?: string[];
  readonly portfolioLinks?: string[];
  readonly technicalSkillIds?: string[];
  readonly projectExperiences?: ProjectExperienceRequestDto[];
  readonly workExperiences?: WorkExperienceRequestDto[];
  readonly fieldOfInterestIds: string[];
}

export class ProjectExperienceRequestDto {
  readonly projectName: string;
  readonly organizationName: string;
  readonly processStatus: string;
  readonly projectDescription: string;
  readonly startedAt: Date;
  readonly endedAt: Date;
}

export class WorkExperienceRequestDto {
  readonly companyName: string;
  readonly department: string;
  readonly description: string;
  readonly employmentType: string;
  readonly position: string;
  readonly startedAt: Date;
  readonly endedAt: Date;
}
