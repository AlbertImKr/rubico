import { Module } from '@nestjs/common';
import { UserAccountModule } from '../user-account/user-account.module';
import { AuthModule } from '../auth/auth.module';
import ConfigModule from '../shared/config/config.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { DATABASE } from '../shared/constants/config.constants';
import { ResumeModule } from '../resume/resume.module';

@Module({
  imports: [
    ConfigModule(),
    TypeOrmModule.forRootAsync({
      useFactory: async (
        configService: ConfigService,
      ): Promise<TypeOrmModuleOptions> => ({
        type: 'postgres',
        host: configService.get<string>(DATABASE.HOST),
        port: configService.get<number>(DATABASE.PORT),
        username: configService.get<string>(DATABASE.USERNAME),
        password: configService.get<string>(DATABASE.PASSWORD),
        database: configService.get<string>(DATABASE.NAME),
        entities: [__dirname + configService.get<string>(DATABASE.ENTITY_PATH)],
        synchronize: configService.get<boolean>(DATABASE.SYNC),
        // logging: true,
      }),
      inject: [ConfigService],
    }),
    UserAccountModule,
    AuthModule,
    ResumeModule,
  ],
})
export class AppModule {}
