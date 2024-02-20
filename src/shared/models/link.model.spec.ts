import { InvalidLinkPatternError } from '../exception/error/link.error';
import { Link } from './link.model';

describe('Link', () => {
  it('url이 정상적으로 입력되면 value 프로퍼티에 할당된다', () => {
    // given
    const url = 'https://www.github.com';

    // when
    const link = new Link(url);

    // then
    expect(link.value).toBe(url);
  });

  it('url이 잘못 입력되면 validate 메소드가 에러를 발생시킨다', () => {
    // given
    const url = 'httds://www.github.com';

    // when,then
    expect(() => new Link(url)).toThrow(InvalidLinkPatternError);
  });
});
