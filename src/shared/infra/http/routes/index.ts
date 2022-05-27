import { Router } from "express";

import { employeeRoutes } from "./employees.routes";

const routes = Router();

routes.use("/employees", employeeRoutes);

export default routes;
