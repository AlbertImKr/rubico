import { ObjectId } from 'mongodb';
import { InterestField } from './field_of_interest.domain';
import { FieldOfWorkName } from '../model/field-of-work-name.model';

export class FieldOfWork {
  id: ObjectId;

  interestFields: InterestField[];

  name: FieldOfWorkName;

  deletedAt?: Date;

  createdAt: Date;

  updatedAt: Date;
}
