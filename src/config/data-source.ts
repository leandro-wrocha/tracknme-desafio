import { DataSource } from "typeorm";

import { createEmployees1653419486818 } from "../shared/infra/typeorm/migrations/1653419486818-create_employees";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "docker",
  database: "tracknme_desafio",
  logging: true,
  synchronize: true,

  entities: [],
  migrations: [createEmployees1653419486818],
});
