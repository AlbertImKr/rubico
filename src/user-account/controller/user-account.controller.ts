import { Body, Controller, Put } from '@nestjs/common';
import { UserAccountService } from '../service/user-account.service';
import {
  EditPasswordRequest,
  EditUserInfoRequest,
} from '../dto/user-account.request.dto';
import {
  EditUserInfoDataTransformer,
  EditUserPasswordDataTransformer,
} from '../transformers/user-account.dto.transformer';
import { UserData } from '../../shared/decorators/auth.decorator';
import { LoginUserData } from '../../auth/dto/auth.data.dto';
import { UserInfoResponse } from '../dto/user-account.response.dto';

@Controller('user')
export class UserAccountController {
  constructor(private userAccountService: UserAccountService) {}

  @Put('info')
  async updateInfo(
    @Body() request: EditUserInfoRequest,
    @UserData() userData: LoginUserData,
  ): Promise<UserInfoResponse> {
    const data = EditUserInfoDataTransformer.toData(request, userData.id);
    return this.userAccountService.updateInfo(data);
  }

  @Put('password')
  async updatePassword(
    @Body() request: EditPasswordRequest,
    @UserData() userData: LoginUserData,
  ): Promise<void> {
    const data = EditUserPasswordDataTransformer.toData(request, userData.id);
    return this.userAccountService.updatePassword(data);
  }
}
