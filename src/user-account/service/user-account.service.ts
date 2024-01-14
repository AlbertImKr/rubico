import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAccount } from '../entities/user-account.entity';
import { DataSource, Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { Email } from '../../shared/models/email.model';
import {
  EditUserInfoData,
  EditUserPasswordData,
  GenerateUserAccountData,
} from '../dto/user-account.data.dto';
import {
  EmailAlreadyExistsError,
  UserAccountNotFoundError,
} from '../../shared/exception/error/user-account.error';
import { Transactional } from '../../shared/decorators/transactional.decorator';
import { PasswordHasher } from '../../shared/utils/password-hasher';
import { EXCEPTION_MESSAGES } from '../../shared/exception/exception-messages.constants';

@Injectable()
export class UserAccountService {
  constructor(
    @InjectRepository(UserAccount)
    private readonly userAccountRepository: Repository<UserAccount>,
    private readonly dataSource: DataSource,
  ) {}

  async generate(userData: GenerateUserAccountData): Promise<UserAccount> {
    const now = new Date();
    const id = new ObjectId();
    if (await this.isExistsEmail(userData.email)) {
      throw new EmailAlreadyExistsError();
    }
    const userAccount = this.userAccountRepository.create({
      ...userData,
      id: id,
      createdAt: now,
      updatedAt: now,
    });
    return this.userAccountRepository.save(userAccount);
  }

  async isExistsEmail(email: Email): Promise<boolean> {
    return this.userAccountRepository.existsBy({
      email: email,
    });
  }

  async findByEmail(email: Email): Promise<UserAccount> {
    const userAccount = await this.userAccountRepository.findOneBy({
      email: email,
    });
    if (!userAccount) {
      throw new UserAccountNotFoundError();
    }
    return userAccount;
  }

  async findById(id: ObjectId): Promise<UserAccount> {
    const userAccount = await this.userAccountRepository.findOneBy({ id: id });
    if (!userAccount) {
      throw new UserAccountNotFoundError();
    }
    return userAccount;
  }

  @Transactional()
  async updatePassword(data: EditUserPasswordData): Promise<void> {
    const userAccount = await this.findById(data.userId);
    if (!PasswordHasher.compare(userAccount.hashedPassword, data.password)) {
      throw new UnauthorizedException(EXCEPTION_MESSAGES.PASSWORD_MISMATCH);
    }
    const newHashedPassword = await PasswordHasher.hash(data.newPassword);
    userAccount.hashedPassword = newHashedPassword;
    userAccount.updatedAt = new Date();
    await this.userAccountRepository.save(userAccount, { transaction: false });
  }

  @Transactional()
  async updateInfo(data: EditUserInfoData) {
    const userAccount = await this.findById(data.userId);
    userAccount.nickname = data.nickname;
    userAccount.address = data.address;
    userAccount.introduction = data.introduction
      ? data.introduction
      : userAccount.introduction;
    const now = new Date();
    userAccount.updatedAt = now;
    const savedUserAccount = await this.userAccountRepository.save(
      userAccount,
      {
        transaction: false,
      },
    );
    return {
      nickname: savedUserAccount.nickname.value,
      address: savedUserAccount.address.value,
      introduction: savedUserAccount.introduction?.value,
    };
  }
}
