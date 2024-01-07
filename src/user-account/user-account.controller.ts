import { Body, Controller, Post } from '@nestjs/common';
import { UserAccountService } from './user-account.service';
import { CreateUserAccountDto } from './dto/create-user-account.dto';

@Controller('user')
export class UserAccountController {
  constructor(private userAccountService: UserAccountService) {}

  @Post()
  signup(@Body() createUserAccountDto: CreateUserAccountDto) {
    return this.userAccountService.signup(createUserAccountDto);
  }
}
