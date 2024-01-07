import { Body, Controller, Post } from '@nestjs/common';
import { UserAccountService } from './user-account.service';
import { CreateUserAccountDto } from './dto/user-account.request.dto';
import { ApiCreateUserAccount } from './decorator/user-account.api.decorator';
import { UserAccountIdDto } from './dto/user-account.response.dto';

@Controller('user')
export class UserAccountController {
  constructor(private userAccountService: UserAccountService) {}

  @ApiCreateUserAccount()
  @Post()
  async signup(
    @Body() createUserAccountDto: CreateUserAccountDto,
  ): Promise<UserAccountIdDto> {
    return this.userAccountService.signup(createUserAccountDto);
  }
}
