import { HttpException, HttpStatus } from '@nestjs/common';
import { EXCEPTION_MESSAGES } from '../exception-messages.constants';

export class InvalidLinkPatternError extends HttpException {
  constructor() {
    super(EXCEPTION_MESSAGES.LINK_IS_NOT_MATCHES, HttpStatus.BAD_REQUEST);
  }
}
