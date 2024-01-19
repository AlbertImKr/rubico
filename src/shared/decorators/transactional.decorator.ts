import { IsolationLevel } from 'typeorm/driver/types/IsolationLevel';
import { DEFAULT_ISOLATION_LEVEL } from '../constants/config.constants';
import { DataSource, QueryRunner } from 'typeorm';

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
      const dataSource: DataSource = this.dataSource;
      if (!dataSource) {
        throw new Error('DataSource is not injected');
      }

      // 트랜잭션을 이미 사용하는 경우 추가로 트랜잭션을 생성하지 않는다.
      const existsTransaction = args.find(
        (arg) => arg.connection !== undefined,
      );
      if (existsTransaction) {
        return originalMethod.apply(this, args);
      }

      // 트랜잭션을 사용하지 않는 경우 트랜잭션을 생성한다.
      const queryRunner: QueryRunner = dataSource.createQueryRunner();
      await queryRunner.connect();
      await queryRunner.startTransaction(
        isolationLevel ? isolationLevel : DEFAULT_ISOLATION_LEVEL,
      );

      try {
        args = args.concat(queryRunner);
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
