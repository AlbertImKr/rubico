import { compare, hash } from 'bcrypt';
import { Password } from '../../shared/models/password.model';
import { SALT_ROUNDS } from '../../shared/constants/app.constants';
import { HashedPassword } from '../../shared/models/hash-password.model';

export class PasswordHasher {
  static async hash(password: Password): Promise<HashedPassword> {
    const hashedPassword = await hash(password.value, SALT_ROUNDS);
    return new HashedPassword(hashedPassword);
  }
  static async compare(
    hashedPassword: HashedPassword,
    password: Password,
  ): Promise<boolean> {
    return await compare(password.value, hashedPassword.value);
  }
}
