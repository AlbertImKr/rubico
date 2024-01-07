import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAccount } from './entities/user-account.entity';
import { Repository } from 'typeorm';
import { CreateUserAccountDto } from './dto/create-user-account.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class UserAccountService {
  constructor(
    @InjectRepository(UserAccount)
    private userAccountRepository: Repository<UserAccount>,
  ) {}

  async signup(createUserAccountDto: CreateUserAccountDto) {
    const now = new Date();
    const id = new ObjectId();
    const userAccount = this.userAccountRepository.create({
      ...createUserAccountDto,
      id: id,
      createdAt: now,
      updatedAt: now,
    });

    await this.userAccountRepository.save(userAccount);
    return { ...userAccount, password: undefined };
  }
}
