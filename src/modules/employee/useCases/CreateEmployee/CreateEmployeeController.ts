import { Request, Response } from "express";
import { CreateEmployeeUseCase } from "@/modules/employee/useCases/CreateEmployee/CreateEmployeeUseCase";
import { IEmployeeDTO } from "@/modules/employee/dtos";
import { container } from "tsyringe";

export class CreateEmployeeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: IEmployeeDTO = request.body;
    const createEmployeeUseCase = container.resolve(CreateEmployeeUseCase);

    await createEmployeeUseCase.execute(data);

    return response.status(201).json();
  }
}
