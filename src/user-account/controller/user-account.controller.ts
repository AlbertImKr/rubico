import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Put,
} from '@nestjs/common';
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
import {
  ApiSoftDeleteUser,
  ApiUpdateUserInfo,
  ApiUpdateUserPassword,
} from '../decorators/user-account.api.decorator';

@Controller('user-account')
export class UserAccountController {
  constructor(private userAccountService: UserAccountService) {}

  @ApiUpdateUserInfo()
  @Put('info')
  async updateInfo(
    @Body() request: EditUserInfoRequest,
    @UserData() userData: LoginUserData,
  ): Promise<UserInfoResponse> {
    const data = EditUserInfoDataTransformer.toData(request, userData.id);
    return this.userAccountService.updateInfo(data);
  }

  @ApiUpdateUserPassword()
  @Put('password')
  @HttpCode(HttpStatus.NO_CONTENT)
  async updatePassword(
    @Body() request: EditPasswordRequest,
    @UserData() userData: LoginUserData,
  ): Promise<void> {
    const data = EditUserPasswordDataTransformer.toData(request, userData.id);
    return this.userAccountService.updatePassword(data);
  }

  @ApiSoftDeleteUser()
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete()
  async softDelete(@UserData() userData: LoginUserData): Promise<void> {
    return this.userAccountService.softDelete(userData.id);
  }
}
