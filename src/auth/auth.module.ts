import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UserAccountModule } from '../user-account/user-account.module';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '../shared/guards/auth.guard';
import { JWT_CONSTANTS } from '../shared/constants/jwt.constants';
import { AUTH_GUARD } from '../shared/constants/app.constants';
// import { Auth_GUARD } from '../shared/constants/app.constants';

@Module({
  imports: [
    UserAccountModule,
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>(JWT_CONSTANTS.SECRET),
        signOptions: {
          expiresIn: configService.get<string>(
            JWT_CONSTANTS.ACCESS_TOKEN_EXPIRES_IN,
          ),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, { provide: AUTH_GUARD, useClass: AuthGuard }],
})
export class AuthModule {}
