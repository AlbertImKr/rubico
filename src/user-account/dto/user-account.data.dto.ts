import { ObjectId } from 'mongodb';
import { Nickname } from '../../shared/models/nickname.model';
import { Address } from '../../shared/models/address.model';
import { Introduction } from '../../shared/models/introduction.model';

export class EditUserInfoData {
  readonly userId: ObjectId;
  readonly nickname: Nickname;
  readonly address: Address;
  readonly introduction?: Introduction;
}
