import { Link } from '../../shared/models/link.model';
import { PortfolioFileName } from '../model/portfolio-file-name.model';
import { CustomMimeType } from '../types/mine-type.types';
import { ObjectId } from 'mongodb';

export class PortfolioFileRegisterData {
  readonly name: PortfolioFileName;
  readonly mimeType: CustomMimeType;
  readonly link: Link;
  readonly userId: ObjectId;
}
