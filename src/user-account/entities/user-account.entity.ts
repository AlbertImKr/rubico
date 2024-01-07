import { ObjectId } from 'mongodb';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user_account' })
export class UserAccount {
  @PrimaryColumn({
    type: 'char',
    length: 24,
    name: 'id',
    transformer: {
      to: (value: ObjectId) => value.toHexString(),
      from: (value: string) => new ObjectId(value),
    },
  })
  id: ObjectId;
  @Column({ name: 'email' })
  email: string;
  @Column({ name: 'password' })
  password: string;
  @Column({ name: 'nickname' })
  nickname: string;
  @Column()
  phoneNumber: string;
  @Column()
  address: string;
  @Column({ name: 'is_active', default: false })
  isActive: boolean;
  @Column({ name: 'created_at' })
  createdAt: Date;
  @Column({ name: 'updated_at' })
  updatedAt: Date;
}
