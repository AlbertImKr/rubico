import {
  PORTFOLIO_FILE_NAME_MAX_LENGTH,
  PORTFOLIO_FILE_NAME_MIN_LENGTH,
} from '../../shared/constants/validator.constants';
import {
  PortfolioFileNameIsTooLongError,
  PortfolioFileNameIsTooShortError,
} from '../exception/errors/portfolio-file.error';

export class PortfolioFileName {
  readonly value: string;

  constructor(value: string) {
    PortfolioFileName.validate(value);
    this.value = value;
  }

  static validate(value: string): void {
    if (value.length > PORTFOLIO_FILE_NAME_MAX_LENGTH) {
      throw new PortfolioFileNameIsTooLongError();
    }
    if (value.length < PORTFOLIO_FILE_NAME_MIN_LENGTH) {
      throw new PortfolioFileNameIsTooShortError();
    }
  }
}
