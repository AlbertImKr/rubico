import { ApiProperty } from '@nestjs/swagger';

export class UserAccountIdDto {
  @ApiProperty({
    description: '유저 계정의 ID',
    example: '659ac41c01287755a6ce98e7',
  })
  id: string;
}
