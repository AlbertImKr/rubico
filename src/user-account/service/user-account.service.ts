import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAccount } from '../entities/user-account.entity';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { SignUpDataDto } from '../../auth/dto/signup.data.dto';
import { Email } from '../../shared/models/email.model';

@Injectable()
export class UserAccountService {
  constructor(
    @InjectRepository(UserAccount)
    private userAccountRepository: Repository<UserAccount>,
  ) {}

  async generate(userData: SignUpDataDto): Promise<UserAccount> {
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

  async findByEmail(email: Email) {
    return this.userAccountRepository.findOneBy({ email: email });
  }
}
