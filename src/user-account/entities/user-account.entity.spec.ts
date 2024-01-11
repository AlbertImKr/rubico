import { ObjectId } from 'mongodb';
import { UserAccount } from './user-account.entity';

describe('유저 계정', () => {
  const password = 'Password123!';
  const notSamePassword = 'notSamePassword123!';

  describe('비밀번호가 같은지 확인', () => {
    let userAccount: UserAccount;

    beforeEach(() => {
      userAccount = new UserAccount();
      Object.assign(userAccount, createTestUserData());
    });

    it('같은 비밀번호인 경우 true를 반환한다', () => {
      expect(userAccount.isSamePassword(password)).toEqual(true);
    });

    it('다른 비밀번호인 경우 false를 반환한다', () => {
      expect(userAccount.isSamePassword(notSamePassword)).toEqual(false);
    });
  });

  function createTestUserData() {
    return {
      id: new ObjectId(),
      createdAt: new Date(),
      nickname: 'test',
      email: 'test@email.com',
      address: '서울시 강남구',
      phoneNumber: '123-4567-8901',
      password: password,
    };
  }
});
