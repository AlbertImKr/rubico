import { LINK_PATTERN } from '../constants/validator.constants';
import { InvalidLinkPatternError } from '../exception/error/link.error';

export class Link {
  readonly value: string;

  constructor(value: string) {
    Link.validate(value);
    this.value = value;
  }

  private static validate(value: string): void {
    const regex = new RegExp(LINK_PATTERN);
    if (!regex.test(value)) {
      throw new InvalidLinkPatternError();
    }
  }
}
