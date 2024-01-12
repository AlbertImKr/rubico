import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAccount } from '../entities/user-account.entity';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';

@Injectable()
export class UserAccountService {
  constructor(
    @InjectRepository(UserAccount)
    private userAccountRepository: Repository<UserAccount>,
  ) {}

  async generate(userData: {
    nickname: string;
    email: string;
    address: string;
    phoneNumber: string;
    password: string;
  }): Promise<UserAccount> {
    const now = new Date();
    const id = new ObjectId();
    const userAccount = this.userAccountRepository.create({
      ...userData,
      id: id,
      createdAt: now,
      updatedAt: now,
    });
    return this.userAccountRepository.save(userAccount);
  }

  async findByEmail(email: string) {
    return this.userAccountRepository.findOneBy({ email: email });
  }
}
