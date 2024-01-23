import { Module } from '@nestjs/common';
import { ResumeWriteController } from './controller/resume.write.controller';
import { ResumeService as ResumeWriteService } from './service/resume.service';

@Module({
  controllers: [ResumeWriteController],
  providers: [ResumeWriteService],
})
export class ResumeModule {}
