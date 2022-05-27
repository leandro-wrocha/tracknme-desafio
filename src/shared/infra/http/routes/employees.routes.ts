import { Router } from "express";

import { CreateEmployeeController } from "@/modules/employee/useCases/CreateEmployee/CreateEmployeeController";
import { ListEmployeeController } from "@/modules/employee/useCases/ListEmployees/ListEmployeeController";
import { DestroyEmployeeUseCase } from "@/modules/employee/useCases/DestroyEmployee/DestroyEmployeeUseCase";
import { DestroyEmployeeController } from "@/modules/employee/useCases/DestroyEmployee/DestroyEmployeeController";

const createEmployeeController = new CreateEmployeeController();
const listEmployeeController = new ListEmployeeController();
const destroyEmployeeController = new DestroyEmployeeController();

const employeeRoutes = Router();

employeeRoutes.post("/", createEmployeeController.handle);
employeeRoutes.get("/", listEmployeeController.handle);
employeeRoutes.delete("/:id", destroyEmployeeController.handle);

export { employeeRoutes };
