import { Address } from '../../shared/models/address.model';
import { Introduction } from '../../shared/models/introduction.model';
import { Nickname } from '../../shared/models/nickname.model';
import {
  EditUserInfoData,
  EditUserPasswordData,
} from '../dto/user-account.data.dto';
import {
  EditPasswordRequest,
  EditUserInfoRequest,
} from '../dto/user-account.request.dto';
import { Password } from '../../shared/models/password.model';
import { ObjectId } from 'mongodb';

export class EditUserInfoDataTransformer {
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

export class EditUserPasswordDataTransformer {
  static toData(
    request: EditPasswordRequest,
    userId: ObjectId,
  ): EditUserPasswordData {
    return {
      userId: userId,
      password: new Password(request.password),
      newPassword: new Password(request.newPassword),
    };
  }
}
