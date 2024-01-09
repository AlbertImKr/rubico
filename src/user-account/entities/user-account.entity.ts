import { ObjectId } from 'mongodb';
import { Column, Entity, PrimaryColumn } from 'typeorm';
import {
  COLUMN_NAME,
  COLUMN_TYPE,
  ID_LENGTH,
} from '../../shared/constants/database.constants';

@Entity({ name: 'user_account' })
export class UserAccount {
  @PrimaryColumn({
    type: COLUMN_TYPE.CHAR,
    length: ID_LENGTH,
    transformer: {
      to: (value: ObjectId) => value.toHexString(),
      from: (value: string) => new ObjectId(value),
    },
  })
  id: ObjectId;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  nickname: string;
  @Column()
  phoneNumber: string;
  @Column()
  address: string;
  @Column({ name: COLUMN_NAME.IS_ACTIVE, default: false })
  isActive: boolean;
  @Column({ name: COLUMN_NAME.CREATED_AT })
  createdAt: Date;
  @Column({ name: COLUMN_NAME.UPDATED_AT })
  updatedAt: Date;

  isSamePassword(password: string) {
    return this.password === password;
  }
}
