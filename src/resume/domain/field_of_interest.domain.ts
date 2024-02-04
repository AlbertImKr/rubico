import { ObjectId } from 'mongodb';
import { FieldOfWork } from './field_of_work.domain';
import { InterestFieldName } from '../model/Interest-field-name.model';

export class InterestField {
  id: ObjectId;

  fieldOfWork: FieldOfWork;

  name: InterestFieldName;

  deletedAt?: Date;

  createdAt: Date;

  updatedAt: Date;
}
