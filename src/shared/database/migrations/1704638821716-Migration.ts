import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1704638821716 implements MigrationInterface {
  name = 'Migration1704638821716';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_account" RENAME COLUMN "phone" TO "phoneNumber"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_account" RENAME COLUMN "phoneNumber" TO "phone"`,
    );
  }
}
