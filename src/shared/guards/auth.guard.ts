import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { IS_PUBLIC_KEY } from '../decorators/auth.decorator';
import { EXCEPTION_MESSAGES } from '../exception/exception-messages.constants';
import { TOKEN, USER_DATA_KEY } from '../constants/app.constants';
import { LoginUserData } from '../../auth/dto/auth.data.dto';
import { Nickname } from '../models/nickname.model';
import { ObjectId } from 'mongodb';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;

    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException(EXCEPTION_MESSAGES.NEED_IS_LOGIN);
    }
    try {
      const { sub, nickname }: { sub: string; nickname: string } =
        await this.jwtService.verifyAsync(token);
      const userData: LoginUserData = {
        id: new ObjectId(sub),
        nickname: new Nickname(nickname),
      };
      request[USER_DATA_KEY] = userData;
    } catch {
      throw new UnauthorizedException(EXCEPTION_MESSAGES.NEED_IS_LOGIN);
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] =
      request.headers.authorization?.split(TOKEN.SPILT) ?? [];
    return type === TOKEN.PREFIX ? token : undefined;
  }
}
