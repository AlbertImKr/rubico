import { Controller } from '@nestjs/common';
import { ProfileImageWriteService } from '../service/profile-image.write.service';

@Controller('profile-image')
export class ProfileImageWriteController {
  constructor(private readonly profileImageService: ProfileImageWriteService) {}
}
