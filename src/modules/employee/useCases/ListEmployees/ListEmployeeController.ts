import { Request, Response } from "express";
import { ListEmployeeUseCase } from "./ListEmployeesUseCase";
import { IEmployeeDTO } from "@/modules/employee/dtos";
import { container } from "tsyringe";

export class ListEmployeeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: IEmployeeDTO = request.body;
    const listEmployeesUseCase = container.resolve(ListEmployeeUseCase);

    const employees = await listEmployeesUseCase.execute();

    return response.status(200).json(employees);
  }
}
