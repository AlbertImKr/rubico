import { Controller } from '@nestjs/common';
import { UserAccountService } from './user-account.service';

@Controller('user')
export class UserAccountController {
  constructor(private userAccountService: UserAccountService) {}
}
