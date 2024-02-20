import { Injectable, PipeTransform } from '@nestjs/common';
import {
  PORTFOLIO_FILE_MAX_SIZE,
  PORTFOLIO_FILE_TYPE,
} from '../constants/validator.constants';
import {
  PortfolioFileIsNotPdfError,
  PortfolioFileIsTooLargeError,
} from '../../resume/exception/errors/portfolio-file.error';

@Injectable()
export class PortfolioFileSizeValidatorPipe implements PipeTransform {
  transform(value: any) {
    const file = value as Express.Multer.File;
    if (file?.size > PORTFOLIO_FILE_MAX_SIZE) {
      throw new PortfolioFileIsTooLargeError();
    }
    return value;
  }
}

@Injectable()
export class PortfolioFileTypeValidatorPipe implements PipeTransform {
  transform(value: any) {
    const file = value as Express.Multer.File;
    if (!file?.mimetype.match(PORTFOLIO_FILE_TYPE)) {
      throw new PortfolioFileIsNotPdfError();
    }
    return value;
  }
}
