export default () => ({
  ENVIRONMENT: process.env.NODE_ENV || 'local',
  DB_HOST: process.env.POSTGRES_HOST,
  DB_PORT: process.env.POSTGRES_PORT,
  DB_NAME: process.env.DB_NAME,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
});
