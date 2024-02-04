import {
  TECHNICAL_SKILL_NAME_MAX_LENGTH,
  TECHNICAL_SKILL_NAME_MIN_LENGTH,
} from '../../shared/constants/validator.constants';
import {
  TechnicalSkillNameIsTooLongError,
  TechnicalSkillNameIsTooShortError,
} from '../exception/errors/technical-skill.error';

export class TechnicalSkillName {
  readonly value: string;

  constructor(value: string) {
    TechnicalSkillName.validate(value);
    this.value = value;
  }

  static validate(value: string): void {
    if (value.length > TECHNICAL_SKILL_NAME_MAX_LENGTH) {
      throw new TechnicalSkillNameIsTooLongError();
    }
    if (value.length < TECHNICAL_SKILL_NAME_MIN_LENGTH) {
      throw new TechnicalSkillNameIsTooShortError();
    }
  }
}
