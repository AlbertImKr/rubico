import {
  ExecutionContext,
  SetMetadata,
  createParamDecorator,
} from '@nestjs/common';
import { LoginUserDataDto } from '../../auth/dto/auth.data.dto';
import { USER_DATA_KEY } from '../constants/app.constants';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

export const UserData = createParamDecorator(
  (_data: any, context: ExecutionContext): LoginUserDataDto => {
    const request = context.switchToHttp().getRequest();
    return request[USER_DATA_KEY];
  },
);
