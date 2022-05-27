import { DataSource } from "typeorm";

import { createEmployees1653661740606 } from "@/shared/infra/typeorm/migrations/1653661740606-create_employees";

import { Employee } from "@/modules/employee/infra/typeorm/entities/Employee";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "docker",
  database: "tracknme",

  entities: [Employee],
  migrations: [createEmployees1653661740606],
});
