import { ObjectId } from 'mongodb';
import { Link } from '../../shared/models/link.model';

export class PortfolioFile {
  id: ObjectId;

  link: Link;

  deletedAt: Date;

  createdAt: Date;

  updatedAt: Date;
}
