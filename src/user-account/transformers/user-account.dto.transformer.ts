import { ObjectId } from 'typeorm';
import { Address } from '../../shared/models/address.model';
import { Introduction } from '../../shared/models/introduction.model.spec';
import { Nickname } from '../../shared/models/nickname.model';
import { EditUserInfoData } from '../dto/user-account.data.dto';
import { EditUserInfoRequest } from '../dto/user-account.request.dto';

export class EditUserInfoDataDtoTransformer {
  static toData(
    request: EditUserInfoRequest,
    userId: ObjectId,
  ): EditUserInfoData {
    const { nickname, introduction, address } = request;
    return {
      userId: userId,
      nickname: new Nickname(nickname),
      introduction: new Introduction(introduction),
      address: new Address(address),
    };
  }
}
