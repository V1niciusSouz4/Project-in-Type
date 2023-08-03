import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1691069109197 implements MigrationInterface {
    name = 'Default1691069109197'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" ALTER COLUMN "preco" TYPE numeric(6,3)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" ALTER COLUMN "preco" TYPE numeric(4,3)`);
    }

}
