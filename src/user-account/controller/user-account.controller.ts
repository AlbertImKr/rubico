import { Body, Controller, Put } from '@nestjs/common';
import { UserAccountService } from '../service/user-account.service';
import { EditUserInfoRequest } from '../dto/user-account.request.dto';
import { EditUserInfoDataDtoTransformer } from '../transformers/user-account.dto.transformer';
import { UserData } from '../../shared/decorators/auth.decorator';
import { LoginUserDataDto } from '../../auth/dto/auth.data.dto';

@Controller('user')
export class UserAccountController {
  constructor(private userAccountService: UserAccountService) {}

  @Put('info')
  async updateInfo(
    @Body() request: EditUserInfoRequest,
    @UserData() userData: LoginUserDataDto,
  ) {
    const data = EditUserInfoDataDtoTransformer.toData(request, userData.id);
    return this.userAccountService.updateInfo(data);
  }
}
