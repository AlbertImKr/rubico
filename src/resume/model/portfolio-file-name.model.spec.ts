import {
  PORTFOLIO_FILE_NAME_MAX_LENGTH,
  PORTFOLIO_FILE_NAME_MIN_LENGTH,
} from '../../shared/constants/validator.constants';
import {
  PortfolioFileNameIsTooLongError,
  PortfolioFileNameIsTooShortError,
} from '../exception/errors/portfolio-file.error';
import { PortfolioFileName } from './portfolio-file-name.model';

describe('PortfolioFileName', () => {
  const MAX_LENGTH_PROFILE_FILE_NAME = 'a'.repeat(
    PORTFOLIO_FILE_NAME_MAX_LENGTH,
  );
  const TOO_LONG_PROFILE_FILE_NAME = 'a'.repeat(
    PORTFOLIO_FILE_NAME_MAX_LENGTH + 1,
  );
  const MIN_LENGTH_PROFILE_FILE_NAME = 'a'.repeat(
    PORTFOLIO_FILE_NAME_MIN_LENGTH,
  );
  const TOO_SHORT_PROFILE_FILE_NAME = 'a'.repeat(
    PORTFOLIO_FILE_NAME_MIN_LENGTH - 1,
  );

  it('프로필 파일 이름은 최소 제한 길이까지만 입력할 수 있다.', () => {
    // when
    const profileFileName = new PortfolioFileName(MIN_LENGTH_PROFILE_FILE_NAME);

    // then
    expect(profileFileName.value).toBe(MIN_LENGTH_PROFILE_FILE_NAME);
  });

  it('프로필 파일 이름은 최소 길이보다 작은 이름을 전달하면 에러가 발생한다', () => {
    // when
    const profileFileName = () =>
      new PortfolioFileName(TOO_SHORT_PROFILE_FILE_NAME);

    // then
    expect(profileFileName).toThrow(PortfolioFileNameIsTooShortError);
  });

  it('프로필 파일 이름은 최대 제한 길이까지만 입력할 수 있다.', () => {
    // when
    const profileFileName = new PortfolioFileName(MAX_LENGTH_PROFILE_FILE_NAME);

    // then
    expect(profileFileName.value).toBe(MAX_LENGTH_PROFILE_FILE_NAME);
  });

  it('프로필 파일 이름은 최대 길이보다 큰 이름을 전달하면 에러가 발생한다', () => {
    // when
    const profileFileName = () =>
      new PortfolioFileName(TOO_LONG_PROFILE_FILE_NAME);

    // then
    expect(profileFileName).toThrow(PortfolioFileNameIsTooLongError);
  });
});
