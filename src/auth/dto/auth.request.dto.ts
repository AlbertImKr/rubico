import {
  ApiPropertyNickname,
  ApiPropertyPassword,
  ApiPropertyUserAddress,
  ApiPropertyUserEmail,
  ApiPropertyUserPhoneNumber,
} from '../../shared/decorators/api.decorator';
import {
  IsAddress,
  IsNickname,
  IsPassword,
  IsUserEmail,
  IsUserPhoneNumber,
} from '../../shared/decorators/validation.decorator';

export class SignInDto {
  @ApiPropertyUserEmail()
  @IsUserEmail()
  readonly email: string;
  @ApiPropertyPassword()
  @IsPassword()
  readonly password: string;
}

export class SignUpDto {
  @ApiPropertyNickname()
  @IsNickname()
  readonly nickname: string;

  @ApiPropertyUserEmail()
  @IsUserEmail()
  readonly email: string;

  @ApiPropertyUserAddress()
  @IsAddress()
  readonly address: string;

  @ApiPropertyUserPhoneNumber()
  @IsUserPhoneNumber()
  readonly phoneNumber: string;

  @ApiPropertyPassword()
  @IsPassword()
  readonly password: string;
}
