import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';

@Injectable()
export class TestDatabaseService {
  constructor(private entityManager: EntityManager) {}

  async clearAll(): Promise<void> {
    const entities = this.entityManager.connection.entityMetadatas;

    for (const entity of entities) {
      const repository = this.entityManager.getRepository(entity.name);
      await repository.query(`DELETE FROM ${entity.tableName}`);
    }
  }
}
