import { TestConstants } from '../../shared/test-utils/test.constants';
import { TestUtils } from '../../shared/test-utils/test.utils';
import { EditUserInfoRequest } from '../dto/user-account.request.dto';
import { EditUserInfoDataDtoTransformer } from './user-account.dto.transformer';

describe('UserAccountDtoTransformer', () => {
  it('EditUserInfoRequest를 EditUserInfoData로 변환한다', () => {
    // given
    const editUserInfoRequest: EditUserInfoRequest = {
      nickname: TestConstants.USER_NICKNAME,
      introduction: TestConstants.USER_INTRODUCTION,
      address: TestConstants.EDIT_USER_ADDRESS,
    };

    // when
    const editUserInfoData = EditUserInfoDataDtoTransformer.toData(
      editUserInfoRequest,
      TestUtils.id,
    );

    // then
    expect(editUserInfoData.userId).toBe(TestUtils.id);
    expect(editUserInfoData.nickname.value).toBe(editUserInfoRequest.nickname);
    expect(editUserInfoData.introduction.value).toBe(
      editUserInfoRequest.introduction,
    );
    expect(editUserInfoData.address.value).toBe(editUserInfoRequest.address);
  });
});
