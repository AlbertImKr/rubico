import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAccountController } from './user-account.controller';
import { UserAccountService } from './user-account.service';
import { UserAccount } from './entities/user-account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserAccount])],
  controllers: [UserAccountController],
  providers: [UserAccountService],
})
export class UserAccountModule {}
