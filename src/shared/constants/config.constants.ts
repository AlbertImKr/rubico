import { IsolationLevel } from 'typeorm/driver/types/IsolationLevel';

export const DATABASE = {
  HOST: 'DB_HOST',
  PORT: 'DB_PORT',
  USERNAME: 'DB_USERNAME',
  PASSWORD: 'DB_PASSWORD',
  NAME: 'DB_NAME',
  SYNC: 'DB_SYNC',
  ENTITY_PATH: 'ENTITY_PATH',
};

export const DEFAULT_ISOLATION_LEVEL: IsolationLevel = 'READ COMMITTED';
