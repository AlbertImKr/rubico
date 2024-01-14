export class EditUserInfoRequest {
  readonly nickname: string;
  readonly address: string;
  readonly introduction: string;
}

export class EditPasswordRequest {
  readonly password: string;
  readonly newPassword: string;
}
