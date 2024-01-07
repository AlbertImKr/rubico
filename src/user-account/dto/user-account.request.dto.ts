import {
  IsAddress,
  IsNickName,
  IsPassword,
  IsUserPhoneNumber,
  IsUserEmail,
} from '../decorator/user-account.validation.decorators';

export class CreateUserAccountDto {
  @IsNickName()
  nickname: string;

  @IsUserEmail()
  email: string;

  @IsAddress()
  address: string;

  @IsUserPhoneNumber()
  phoneNumber: string;

  @IsPassword()
  password: string;
}
