import { ObjectId } from 'mongodb';
import { TechnicalSkillName } from '../model/technical-skill-name.model';

export class TechnicalSkill {
  id: ObjectId;

  name: TechnicalSkillName;

  deletedAt: Date;

  createdAt: Date;

  updatedAt: Date;
}
