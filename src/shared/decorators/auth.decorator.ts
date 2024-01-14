import {
  ExecutionContext,
  SetMetadata,
  createParamDecorator,
} from '@nestjs/common';
import { LoginUserData } from '../../auth/dto/auth.data.dto';
import { USER_DATA_KEY } from '../constants/app.constants';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

export const UserData = createParamDecorator(
  (_data: any, context: ExecutionContext): LoginUserData => {
    const request = context.switchToHttp().getRequest();
    return request[USER_DATA_KEY];
  },
);
