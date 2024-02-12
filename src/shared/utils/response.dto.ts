import { ApiProperty } from '@nestjs/swagger';

export class IdResponse {
  @ApiProperty()
  readonly id: string;
}
