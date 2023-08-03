import { MigrationInterface, QueryRunner } from 'typeorm';

export class Default1691064021764 implements MigrationInterface {
  name = 'Default1691064021764';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "cars" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "marca" text NOT NULL, "preco" numeric(4,2) NOT NULL DEFAULT '0', "categoria" text NOT NULL, "imagem" text NOT NULL, CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "refreshTokens" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "hashedToken" text NOT NULL, "revoked" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "user_id" uuid, CONSTRAINT "UQ_600906f825709374d61d237d677" UNIQUE ("hashedToken"), CONSTRAINT "PK_c4a0078b846c2c4508473680625" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TYPE "public"."users_perfil_enum" AS ENUM('admin', 'client', 'user')`
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, "perfil" "public"."users_perfil_enum" NOT NULL DEFAULT 'user', CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "refreshTokens" ADD CONSTRAINT "FK_75e77bdc70b386f5e2c69170e3e" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "refreshTokens" DROP CONSTRAINT "FK_75e77bdc70b386f5e2c69170e3e"`
    );
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TYPE "public"."users_perfil_enum"`);
    await queryRunner.query(`DROP TABLE "refreshTokens"`);
    await queryRunner.query(`DROP TABLE "cars"`);
  }
}
