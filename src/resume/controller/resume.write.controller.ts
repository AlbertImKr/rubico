import { Body, Controller, Post } from '@nestjs/common';
import { ResumeRegisterRequestDto } from '../dto/resume.request.dto';
import { Public } from '../../shared/decorators/auth.decorator';

@Controller('resume')
export class ResumeWriteController {
  @Public()
  @Post()
  create(@Body() data: ResumeRegisterRequestDto) {
    console.log('data :>> ', data);
    return data;
  }
}
