import { UserAccount } from './user-account.entity';
import { Password } from '../../shared/models/password.model';
import { TestUtils } from '../../shared/test-utils/test.utils';

describe('유저 계정', () => {
  const samePassword = new Password('Password123!');
  const notSamePassword = new Password('notSamePassword123!');

  describe('비밀번호가 같은지 확인', () => {
    let userAccount: UserAccount;

    beforeEach(() => {
      userAccount = TestUtils.userAccount;
    });

    it('같은 비밀번호인 경우 true를 반환한다', () => {
      expect(userAccount.isSamePassword(samePassword)).toEqual(true);
    });

    it('다른 비밀번호인 경우 false를 반환한다', () => {
      expect(userAccount.isSamePassword(notSamePassword)).toEqual(false);
    });
  });
});
