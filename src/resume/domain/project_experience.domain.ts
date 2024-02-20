import { ObjectId } from 'mongodb';
import { OrganizationName } from '../../shared/models/organization-name.model';
import { ProcessStatus } from '../enums/process-status.enum';
import { ProjectDescription } from '../../shared/models/project-description.model';
import { ProjectName } from '../../shared/models/project-name.model';

export class ProjectExperience {
  id: ObjectId;

  organizationName: OrganizationName;

  processStatus: ProcessStatus;

  projectDescription: ProjectDescription;

  projectName: ProjectName;

  startedAt: Date;

  endedAt: Date;

  deletedAt?: Date;

  createdAt: Date;

  updatedAt: Date;
}
