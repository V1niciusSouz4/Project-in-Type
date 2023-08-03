import { MigrationInterface, QueryRunner } from 'typeorm';

export class Default1691064971031 implements MigrationInterface {
  name = 'Default1691064971031';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "cars" ALTER COLUMN "imagem" DROP NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "cars" ALTER COLUMN "imagem" SET NOT NULL`
    );
  }
}
