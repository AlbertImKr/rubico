import { DatabaseType } from 'typeorm';

interface EnvironmentConfig {
  ENVIRONMENT: string;
  DB_TYPE: DatabaseType;
  DB_HOST: string;
  DB_PORT: number;
  DB_NAME: string;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  JWT_SECRET: string;
  JWT_ACCESS_TOKEN_SECRET: string;
  JWT_ACCESS_TOKEN_EXPIRES_IN: string;
  JWT_REFRESH_TOKEN_EXPIRES_IN: string;
  JWT_ACCESS_TOKEN_IDENTIFY: string;
  JWT_REFRESH_TOKEN_IDENTIFY: string;
  ENTITY_PATH: string;
  SYNC_DB: boolean;
}

export default (): EnvironmentConfig => ({
  ENVIRONMENT: process.env.NODE_ENV || 'local',
  DB_TYPE: process.env.DB_TYPE as DatabaseType,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: parseInt(process.env.DB_PORT, 10) || 5432,
  DB_NAME: process.env.DB_NAME,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_ACCESS_TOKEN_SECRET: process.env.JWT_ACCESS_TOKEN_SECRET,
  JWT_ACCESS_TOKEN_EXPIRES_IN: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN,
  JWT_REFRESH_TOKEN_EXPIRES_IN: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN,
  JWT_ACCESS_TOKEN_IDENTIFY: process.env.JWT_ACCESS_TOKEN_IDENTIFY,
  JWT_REFRESH_TOKEN_IDENTIFY: process.env.JWT_REFRESH_TOKEN_IDENTIFY,
  ENTITY_PATH: process.env.ENTITY_PATH,
  SYNC_DB: process.env.SYNC_DB == 'true' ? true : false,
});
