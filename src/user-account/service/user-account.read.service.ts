import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAccount } from '../entities/user-account.entity';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { UserAccountNotFoundError } from '../../shared/exception/error/user-account.error';
import { UserInfoResponse } from '../dto/user-account.response.dto';

@Injectable()
export class UserAccountReadService {
  constructor(
    @InjectRepository(UserAccount)
    private readonly userAccountRepository: Repository<UserAccount>,
  ) {}

  async getUserInfo(id: ObjectId): Promise<UserInfoResponse> {
    const userAccount = await this.findById(id);
    return {
      nickname: userAccount.nickname.value,
      address: userAccount.address.value,
      introduction: userAccount.introduction?.value,
    };
  }

  async findById(id: ObjectId): Promise<UserAccount> {
    const userAccount = await this.userAccountRepository.findOneBy({ id: id });
    if (!userAccount) {
      throw new UserAccountNotFoundError();
    }
    return userAccount;
  }
}
