import {
  TECHNICAL_SKILL_NAME_MAX_LENGTH,
  TECHNICAL_SKILL_NAME_MIN_LENGTH,
} from '../../shared/constants/validator.constants';
import {
  TechnicalSkillNameIsTooLongError,
  TechnicalSkillNameIsTooShortError,
} from '../exception/errors/technical-skill.error';
import { TechnicalSkillName } from './technical-skill-name.model';

describe('TechnicalSkillName', () => {
  const MAX_LENGTH_TECHNICAL_SKILL_NAME = 'a'.repeat(
    TECHNICAL_SKILL_NAME_MAX_LENGTH,
  );
  const TOO_LONG_TECHNICAL_SKILL_NAME = 'a'.repeat(
    TECHNICAL_SKILL_NAME_MAX_LENGTH + 1,
  );
  const MIN_LENGTH_TECHNICAL_SKILL_NAME = 'a'.repeat(
    TECHNICAL_SKILL_NAME_MIN_LENGTH,
  );
  const TOO_SHORT_TECHNICAL_SKILL_NAME = 'a'.repeat(
    TECHNICAL_SKILL_NAME_MIN_LENGTH - 1,
  );

  it('기술 스킬 이름은 최소 제한 길이까지만 입력할 수 있다.', () => {
    // when
    const technicalSkillName = new TechnicalSkillName(
      MIN_LENGTH_TECHNICAL_SKILL_NAME,
    );

    // then
    expect(technicalSkillName.value).toBe(MIN_LENGTH_TECHNICAL_SKILL_NAME);
  });

  it('기술 스킬 이름은 최소 길이보다 작은 이름을 전달하면 에러가 발생한다', () => {
    // when
    const technicalSkillName = () =>
      new TechnicalSkillName(TOO_SHORT_TECHNICAL_SKILL_NAME);

    // then
    expect(technicalSkillName).toThrow(TechnicalSkillNameIsTooShortError);
  });

  it('기술 스킬 이름은 최대 제한 길이까지만 입력할 수 있다.', () => {
    // when
    const technicalSkillName = new TechnicalSkillName(
      MAX_LENGTH_TECHNICAL_SKILL_NAME,
    );

    // then
    expect(technicalSkillName.value).toBe(MAX_LENGTH_TECHNICAL_SKILL_NAME);
  });

  it('기술 스킬 이름은 최대 길이보다 큰 이름을 전달하면 에러가 발생한다', () => {
    // when
    const technicalSkillName = () =>
      new TechnicalSkillName(TOO_LONG_TECHNICAL_SKILL_NAME);

    // then
    expect(technicalSkillName).toThrow(TechnicalSkillNameIsTooLongError);
  });
});
