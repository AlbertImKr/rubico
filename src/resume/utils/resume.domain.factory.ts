import { ObjectId } from 'mongodb';
import {
  ProjectExperienceData,
  ResumeRegisterData,
  WorkExperienceData,
} from '../dto/resume.data.dto';
import { ProfileImage } from '../domain/profile_image.domain';
import { Resume } from '../domain/resume.domain';
import { PortfolioLink } from '../domain/portfolio_link.domain';
import { Link } from '../../shared/models/link.model';
import { ProjectExperience } from '../domain/project_experience.domain';
import { WorkExperience } from '../domain/work_experience.domain';

export class ResumeDomainFactory {
  static createResume(
    data: ResumeRegisterData,
    profileImage: ProfileImage,
  ): Resume {
    const createdAt = new Date();
    return {
      ...data,
      id: new ObjectId(),
      createdAt,
      updatedAt: createdAt,
      profileImage: profileImage,
      portfolioFiles: [],
      portfolioLinks: PortfolioLinkDomainFactory.createPortfolioLinks(
        data.portfolioLinks,
        createdAt,
      ),
      projectExperiences:
        ProjectExperienceDomainFactory.createProjectExperiences(
          data.projectExperiences,
          createdAt,
        ),
      interestsFields: [],
      technicalSkills: [],
      workExperiences: WorkExperienceDomainFactory.createWorkExperiences(
        data.workExperiences,
        createdAt,
      ),
    };
  }
}

export class PortfolioLinkDomainFactory {
  static createPortfolioLink(link: Link, createdAt: Date): PortfolioLink {
    return {
      id: new ObjectId(),
      link: link,
      createdAt,
      updatedAt: createdAt,
    };
  }

  static createPortfolioLinks(links: Link[], createdAt: Date): PortfolioLink[] {
    return links?.map((link) => this.createPortfolioLink(link, createdAt));
  }
}

export class ProjectExperienceDomainFactory {
  static createProjectExperience(
    data: ProjectExperienceData,
    createdAt: Date,
  ): ProjectExperience {
    return {
      id: new ObjectId(),
      ...data,
      createdAt,
      updatedAt: createdAt,
    };
  }

  static createProjectExperiences(
    data: ProjectExperienceData[],
    createdAt: Date,
  ): ProjectExperience[] {
    return data?.map((project) =>
      this.createProjectExperience(project, createdAt),
    );
  }
}

export class WorkExperienceDomainFactory {
  static createWorkExperience(
    data: WorkExperienceData,
    createdAt: Date,
  ): WorkExperience {
    return {
      id: new ObjectId(),
      ...data,
      createdAt,
      updatedAt: createdAt,
    };
  }

  static createWorkExperiences(
    data: WorkExperienceData[],
    createdAt: Date,
  ): WorkExperience[] {
    return data?.map((project) =>
      this.createWorkExperience(project, createdAt),
    );
  }
}
