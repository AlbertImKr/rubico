import {
  IsAddress,
  IsNickname,
  IsPassword,
  IsUserEmail,
  IsUserPhoneNumber,
} from '../../shared/decorators/validation.decorator';

export class SignInDto {
  @IsUserEmail()
  readonly email: string;

  @IsPassword()
  readonly password: string;
}

export class SignUpDto {
  @IsNickname()
  readonly nickname: string;

  @IsUserEmail()
  readonly email: string;

  @IsAddress()
  readonly address: string;

  @IsUserPhoneNumber()
  readonly phoneNumber: string;

  @IsPassword()
  readonly password: string;
}
