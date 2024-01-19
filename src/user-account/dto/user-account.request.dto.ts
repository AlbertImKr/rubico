import {
  ApiPropertyEditIntroduction,
  ApiPropertyEditNickname,
  ApiPropertyEditPassword,
  ApiPropertyEditUserAddress,
  ApiPropertyPassword,
} from '../../shared/decorators/api.decorator';
import {
  IsAddress,
  IsIntroduction,
  IsNickname,
  IsPassword,
} from '../../shared/decorators/validation.decorator';

export class EditUserInfoRequest {
  @ApiPropertyEditNickname()
  @IsNickname()
  readonly nickname: string;
  @ApiPropertyEditUserAddress()
  @IsAddress()
  readonly address: string;
  @ApiPropertyEditIntroduction()
  @IsIntroduction()
  readonly introduction: string;
}

export class EditPasswordRequest {
  @ApiPropertyPassword()
  @IsPassword()
  readonly password: string;
  @ApiPropertyEditPassword()
  @IsPassword()
  readonly newPassword: string;
}
