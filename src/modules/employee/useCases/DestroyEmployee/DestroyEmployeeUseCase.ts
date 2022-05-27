import { inject, injectable } from "tsyringe";
import { IEmployeeRepository } from "../../repositories/IEmployeeRepository";

@injectable()
export class DestroyEmployeeUseCase {
  constructor(
    @inject("EmployeeRepository")
    private employeeRepository: IEmployeeRepository
  ) {}

  async execute(id: string): Promise<void> {
    await this.employeeRepository.deleteEmployee(id);
  }
}
