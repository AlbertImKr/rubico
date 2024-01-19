import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAccountWriteController } from './controller/user-account.write.controller';
import { UserAccountWriteService } from './service/user-account.write.service';
import { UserAccount } from './entities/user-account.entity';
import { UserAccountReadController } from './controller/user-account.read.controller';
import { UserAccountReadService } from './service/user-account.read.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserAccount])],
  controllers: [UserAccountWriteController, UserAccountReadController],
  providers: [UserAccountWriteService, UserAccountReadService],
  exports: [UserAccountWriteService, UserAccountReadService],
})
export class UserAccountModule {}
