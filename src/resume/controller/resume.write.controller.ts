import { Body, Controller, Post } from '@nestjs/common';
import { ResumeRegisterRequestDto } from '../dto/resume.request.dto';
import { UserData } from '../../shared/decorators/auth.decorator';
import { ResumeRegisterDataTransformer } from '../transformers/resume.dto.transformer';
import { ResumeWriteService } from '../service/resume.write.service';
import { LoginUserData } from '../../auth/dto/auth.data.dto';

@Controller('resume')
export class ResumeWriteController {
  constructor(private readonly resumeWriteService: ResumeWriteService) {}

  @Post()
  async register(
    @Body() request: ResumeRegisterRequestDto,
    @UserData() userData: LoginUserData,
  ) {
    const data = ResumeRegisterDataTransformer.from(request, userData.id);
    return this.resumeWriteService.register(data);
  }
}
