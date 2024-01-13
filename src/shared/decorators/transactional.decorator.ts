import { MyDataBaseService } from '../database/database.service';

export function Transactional(): MethodDecorator {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    console.log('originalMethod :>> ', originalMethod);

    descriptor.value = async function (...args: any[]) {
      const dataSource = MyDataBaseService.getDataSource();
      const queryRunner = dataSource.createQueryRunner();

      await queryRunner.connect();
      await queryRunner.startTransaction();

      try {
        this.dataSource = queryRunner.manager;
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
