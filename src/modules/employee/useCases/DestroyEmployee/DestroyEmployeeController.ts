import { Request, Response } from "express";
import { DestroyEmployeeUseCase } from "./DestroyEmployeeUseCase";
import { container } from "tsyringe";

export class DestroyEmployeeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const destroyEmployeeUseCase = container.resolve(DestroyEmployeeUseCase);

    await destroyEmployeeUseCase.execute(id);

    return response.status(204).json();
  }
}
