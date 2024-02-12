import { Controller, Get } from '@nestjs/common';
import { UserAccountReadService } from '../service/user-account.read.service';
import { UserData } from '../../shared/decorators/auth.decorator';
import { LoginUserData } from '../../auth/dto/auth.data.dto';
import { UserInfoResponse } from '../dto/user-account.response.dto';
import { ApiGetUserInfo } from '../decorators/user-account.api.decorator';

@Controller('user-account')
export class UserAccountReadController {
  constructor(private readonly userAccountService: UserAccountReadService) {}

  @ApiGetUserInfo()
  @Get()
  async getUserInfo(
    @UserData() userData: LoginUserData,
  ): Promise<UserInfoResponse> {
    return this.userAccountService.getUserInfo(userData.id);
  }
}
