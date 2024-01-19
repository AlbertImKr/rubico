import {
  ApiPropertyEditIntroduction,
  ApiPropertyEditNickname,
  ApiPropertyEditUserAddress,
} from '../../shared/decorators/api.decorator';

export class UserInfoResponse {
  @ApiPropertyEditNickname()
  readonly nickname: string;
  @ApiPropertyEditUserAddress()
  readonly address: string;
  @ApiPropertyEditIntroduction()
  readonly introduction: string;
}
