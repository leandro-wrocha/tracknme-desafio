import express, { Application } from "express";

import "@/shared/infra/typeorm";

export class ServerApplication {
  private server: Application;

  constructor() {
    this.server = express();
    this.middlewares();
  }

  middlewares() {
    this.server.use(express.json());
  }

  initialization() {
    this.server.listen(3301, () => console.log("Server is running: 3301"));
  }
}
