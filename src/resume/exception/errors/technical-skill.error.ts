import { HttpException, HttpStatus } from '@nestjs/common';
import { EXCEPTION_MESSAGES } from '../../../shared/exception/exception-messages.constants';

export class TechnicalSkillNameIsTooLongError extends HttpException {
  constructor() {
    super(
      EXCEPTION_MESSAGES.TECHNICAL_SKILL_NAME_IS_TOO_LONG,
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class TechnicalSkillNameIsTooShortError extends HttpException {
  constructor() {
    super(
      EXCEPTION_MESSAGES.TECHNICAL_SKILL_NAME_IS_TOO_SHORT,
      HttpStatus.BAD_REQUEST,
    );
  }
}
