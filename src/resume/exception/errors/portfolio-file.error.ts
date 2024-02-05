import { HttpException, HttpStatus } from '@nestjs/common';
import { EXCEPTION_MESSAGES } from '../../../shared/exception/exception-messages.constants';

export class PortfolioFileNameIsTooLongError extends HttpException {
  constructor() {
    super(
      EXCEPTION_MESSAGES.PROFILE_FILE_NAME_IS_TOO_LONG,
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class PortfolioFileNameIsTooShortError extends HttpException {
  constructor() {
    super(
      EXCEPTION_MESSAGES.PROFILE_FILE_NAME_IS_TOO_SHORT,
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class PortfolioFileIsTooLargeError extends HttpException {
  constructor() {
    super(
      EXCEPTION_MESSAGES.PORTFOLIO_FILE_IS_TOO_LARGE,
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class PortfolioFileIsNotPdfError extends HttpException {
  constructor() {
    super(EXCEPTION_MESSAGES.PORTFOLIO_FILE_IS_NOT_PDF, HttpStatus.BAD_REQUEST);
  }
}
