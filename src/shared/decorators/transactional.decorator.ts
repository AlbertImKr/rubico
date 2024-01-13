import { IsolationLevel } from 'typeorm/driver/types/IsolationLevel';
import { MyDataBaseService } from '../database/database.service';
import { DEFAULT_ISOLATION_LEVEL } from '../constants/config.constants';

export function Transactional(
  isolationLevel?: IsolationLevel,
): MethodDecorator {
  return (
    _target: any,
    _propertyKey: string,
    descriptor: PropertyDescriptor,
  ) => {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const dataSource = MyDataBaseService.getDataSource();
      const queryRunner = dataSource.createQueryRunner();
      await queryRunner.connect();
      await queryRunner.startTransaction(
        isolationLevel ? isolationLevel : DEFAULT_ISOLATION_LEVEL,
      );

      try {
        const result = await originalMethod.apply(this, args);
        await queryRunner.commitTransaction();
        return result;
      } catch (err) {
        await queryRunner.rollbackTransaction();
        throw err;
      } finally {
        await queryRunner.release();
      }
    };
  };
}
