import { ObjectId } from 'mongodb';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user_account' })
export class UserAccount {
  @PrimaryColumn('char', { length: 24, name: 'id' })
  id: ObjectId;
  @Column({ name: 'email' })
  email: string;
  @Column({ name: 'password' })
  password: string;
  @Column({ name: 'nickname' })
  nickname: string;
  @Column()
  phone: string;
  @Column()
  address: string;
  @Column({ name: 'is_active' })
  isActive: boolean;
  @Column({ name: 'created_at' })
  createdAt: Date;
  @Column({ name: 'updated_at' })
  updatedAt: Date;
}
