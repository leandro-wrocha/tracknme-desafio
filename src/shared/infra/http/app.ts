import express from "express";

import "@/shared/infra/typeorm";
import "@/shared/containers";

import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

export { app };
