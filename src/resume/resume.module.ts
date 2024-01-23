import { Module } from '@nestjs/common';
import { ResumeController } from './controller/resume.controller';
import { ResumeService } from './service/resume.service';

@Module({
  controllers: [ResumeController],
  providers: [ResumeService],
})
export class ResumeModule {}
