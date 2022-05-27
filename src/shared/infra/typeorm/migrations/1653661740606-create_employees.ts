import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createEmployees1653661740606 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "employees",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "age",
            type: "int",
          },
          {
            name: "zip_code",
            type: "int",
          },
          {
            name: "gender",
            type: "varchar",
          },
          {
            name: "address",
            type: "varchar",
          },
          {
            name: "district",
            type: "varchar",
          },
          {
            name: "city",
            type: "varchar",
          },
          {
            name: "state",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("employees");
  }
}
