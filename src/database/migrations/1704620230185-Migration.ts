import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1704620230185 implements MigrationInterface {
    name = 'Migration1704620230185'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_account" ALTER COLUMN "is_active" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_account" ALTER COLUMN "is_active" DROP DEFAULT`);
    }

}
