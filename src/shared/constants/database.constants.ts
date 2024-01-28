import { ColumnType } from 'typeorm';

export const ID_LENGTH = 24;

export const COLUMN_TYPE = {
  CHAR: 'char' as ColumnType,
  VARCHAR: 'varchar' as ColumnType,
};

export const COLUMN_NAME = {
  IS_ACTIVE: 'is_active',
  UPDATED_AT: 'updated_at',
  CREATED_AT: 'created_at',
  PHONE_NUMBER: 'phone_number',
  DELETED_AT: 'deleted_at',
};

export const INDEX_NAME = {
  UNIQUE_USER_ACCOUNT_USER_EMAIL: 'user_account_email_unique',
};
