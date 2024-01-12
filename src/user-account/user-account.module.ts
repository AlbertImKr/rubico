import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAccountController } from './controller/user-account.controller';
import { UserAccountService } from './service/user-account.service';
import { UserAccount } from './entities/user-account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserAccount])],
  controllers: [UserAccountController],
  providers: [UserAccountService],
  exports: [UserAccountService],
})
export class UserAccountModule {}
