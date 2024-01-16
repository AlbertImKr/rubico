import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAccount } from '../entities/user-account.entity';
import { DataSource, QueryRunner, Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { Email } from '../../shared/models/email.model';
import {
  EditUserInfoData,
  EditUserPasswordData,
  GenerateUserAccountData,
} from '../dto/user-account.data.dto';
import {
  EmailAlreadyExistsError,
  PasswordNotMatchError,
  UserAccountNotFoundError,
} from '../../shared/exception/error/user-account.error';
import { PasswordHasher } from '../../shared/utils/password-hasher';
import { Transactional } from '../../shared/decorators/transactional.decorator';
import { HashedPassword } from '../../shared/models/hash-password.model';
import { Password } from '../../shared/models/password.model';
import { UserInfoResponse } from '../dto/user-account.response.dto';

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
      deleted: false,
    });
    if (!userAccount) {
      throw new UserAccountNotFoundError();
    }
    return userAccount;
  }

  @Transactional()
  async updatePassword(
    data: EditUserPasswordData,
    queryRunner?: QueryRunner,
  ): Promise<void> {
    const userAccount = await this.findByIdWithQueryRunner(
      data.userId,
      queryRunner,
    );
    await this.validatePassword(userAccount.hashedPassword, data.password);
    const newHashedPassword = await PasswordHasher.hash(data.newPassword);
    userAccount.hashedPassword = newHashedPassword;
    userAccount.updatedAt = new Date();
    await this.saveWithQueryRunner(userAccount, queryRunner);
  }

  @Transactional()
  async updateInfo(
    data: EditUserInfoData,
    queryRunner?: QueryRunner,
  ): Promise<UserInfoResponse> {
    const userAccount = await this.findByIdWithQueryRunner(
      data.userId,
      queryRunner,
    );
    userAccount.nickname = data.nickname;
    userAccount.address = data.address;
    userAccount.introduction = data.introduction
      ? data.introduction
      : userAccount.introduction;
    userAccount.updatedAt = new Date();
    await this.saveWithQueryRunner(userAccount, queryRunner);
    return {
      nickname: userAccount.nickname.value,
      address: userAccount.address.value,
      introduction: userAccount.introduction?.value,
    };
  }

  @Transactional()
  async softDelete(id: ObjectId, queryRunner?: QueryRunner): Promise<void> {
    const userAccount = await this.findByIdWithQueryRunner(id, queryRunner);
    userAccount.deleted = true;
    userAccount.updatedAt = new Date();
    await this.saveWithQueryRunner(userAccount, queryRunner);
  }

  async findByIdWithQueryRunner(
    id: ObjectId,
    queryRunner: QueryRunner,
  ): Promise<UserAccount> {
    const userAccount = await queryRunner.manager.findOneBy(UserAccount, {
      id: id,
      deleted: false,
    });
    if (!userAccount) {
      throw new UserAccountNotFoundError();
    }
    return userAccount;
  }

  async saveWithQueryRunner(
    userAccount: UserAccount,
    queryRunner: QueryRunner,
  ) {
    return queryRunner.manager.save(UserAccount, userAccount);
  }

  async validatePassword(
    hashedPassword: HashedPassword,
    password: Password,
  ): Promise<void> {
    if (!(await PasswordHasher.compare(hashedPassword, password))) {
      throw new PasswordNotMatchError();
    }
  }
}
