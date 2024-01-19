import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config({ path: '.env.local' });

export default new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['src/**/*.entity{.ts,.js}'],
  migrations: ['src/shared/database/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  synchronize: false,
});
