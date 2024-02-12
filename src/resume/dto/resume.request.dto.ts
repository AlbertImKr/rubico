import { ApiProperty } from '@nestjs/swagger';
import {
  ApiPropertyCompanyName,
  ApiPropertyDepartment,
  ApiPropertyEmploymentType,
  ApiPropertyEndedAt,
  ApiPropertyFieldOfInterestIds,
  ApiPropertyNickname,
  ApiPropertyOccupation,
  ApiPropertyOrganizationName,
  ApiPropertyPortfolioFileIds,
  ApiPropertyPortfolioLinks,
  ApiPropertyPosition,
  ApiPropertyProcessStatus,
  ApiPropertyProfileImageId,
  ApiPropertyProjectDescription,
  ApiPropertyProjectName,
  ApiPropertyResumeBriefIntroduction,
  ApiPropertyStartedAt,
  ApiPropertyTechnicalSkillIds,
  ApiPropertyUserAddress,
  ApiPropertyUserEmail,
  ApiPropertyUserPhoneNumber,
  ApiPropertyWorkExperienceDescription,
} from '../../shared/decorators/api.decorator';

export class ProjectExperienceRequestDto {
  @ApiPropertyProjectName()
  readonly projectName: string;
  @ApiPropertyOrganizationName()
  readonly organizationName: string;
  @ApiPropertyProcessStatus()
  readonly processStatus: string;
  @ApiPropertyProjectDescription()
  readonly projectDescription: string;
  @ApiPropertyStartedAt()
  readonly startedAt: Date;
  @ApiPropertyEndedAt()
  readonly endedAt: Date;
}

export class WorkExperienceRequestDto {
  @ApiPropertyCompanyName()
  readonly companyName: string;
  @ApiPropertyDepartment()
  readonly department: string;
  @ApiPropertyWorkExperienceDescription()
  readonly description: string;
  @ApiPropertyEmploymentType()
  readonly employmentType: string;
  @ApiPropertyPosition()
  readonly position: string;
  @ApiPropertyStartedAt()
  readonly startedAt: Date;
  @ApiPropertyEndedAt()
  readonly endedAt: Date;
}

export class ResumeRegisterRequestDto {
  @ApiPropertyNickname()
  readonly name: string;
  @ApiPropertyUserEmail()
  readonly email: string;
  @ApiPropertyUserPhoneNumber()
  readonly phoneNumber: string;
  @ApiPropertyUserAddress()
  readonly address: string;
  @ApiPropertyOccupation()
  readonly occupation: string;
  @ApiPropertyResumeBriefIntroduction()
  readonly briefIntroduction: string;
  @ApiPropertyProfileImageId()
  readonly profileImageId: string;
  @ApiPropertyPortfolioFileIds()
  readonly portfolioFileIds?: string[];
  @ApiPropertyPortfolioLinks()
  readonly portfolioLinks?: string[];
  @ApiPropertyTechnicalSkillIds()
  readonly technicalSkillIds?: string[];
  @ApiProperty({ type: ProjectExperienceRequestDto, isArray: true })
  readonly projectExperiences?: ProjectExperienceRequestDto[];
  @ApiProperty({ type: WorkExperienceRequestDto, isArray: true })
  readonly workExperiences?: WorkExperienceRequestDto[];
  @ApiPropertyFieldOfInterestIds()
  readonly fieldOfInterestIds: string[];
}
