import { ObjectId } from 'mongodb';
import { CompanyName } from '../../shared/models/company-name.model';
import { Department } from '../../shared/models/department.model';
import { WorkExperienceDescription } from '../../shared/models/work-experience-description.model';
import { EmploymentType } from '../enums/employment-type.enum';
import { WorkPosition } from '../../shared/models/work-position.model';

export class WorkExperience {
  id: ObjectId;

  companyName: CompanyName;

  department: Department;

  description: WorkExperienceDescription;

  employmentType: EmploymentType;

  position: WorkPosition;

  startDate: Date;

  endDate: Date;

  deletedAt: Date;

  createdAt: Date;

  updatedAt: Date;
}
