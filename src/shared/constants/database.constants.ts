import { ColumnType } from 'typeorm';

export const ID_LENGTH = 24;

export const COLUMN_TYPE = {
  CHAR: 'char' as ColumnType,
};

export const COLUMN_NAME = {
  IS_ACTIVE: 'is_active',
  UPDATED_AT: 'updated_at',
  CREATED_AT: 'created_at',
};
