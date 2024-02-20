import { ObjectId } from 'mongodb';
import { InterestFieldName } from '../model/Interest-field-name.model';
import { FieldOfWork } from './field_of_work.domain';

export class InterestField {
  id: ObjectId;

  fieldOfWork: FieldOfWork;

  name: InterestFieldName;

  deletedAt?: Date;

  createdAt: Date;

  updatedAt: Date;
}
