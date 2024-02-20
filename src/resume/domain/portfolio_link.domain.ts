import { ObjectId } from 'mongodb';
import { Link } from '../../shared/models/link.model';

export class PortfolioLink {
  id: ObjectId;

  link: Link;

  deletedAt?: Date;

  createdAt: Date;

  updatedAt: Date;
}
