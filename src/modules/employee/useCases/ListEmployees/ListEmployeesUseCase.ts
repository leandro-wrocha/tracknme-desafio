import { inject, injectable } from "tsyringe";
import { Employee } from "../../infra/typeorm/entities/Employee";
import { IEmployeeRepository } from "../../repositories/IEmployeeRepository";

@injectable()
export class ListEmployeeUseCase {
  constructor(
    @inject("EmployeeRepository")
    private employeeRepository: IEmployeeRepository
  ) {}

  async execute(): Promise<Employee[]> {
    const employees = await this.employeeRepository.list();

    return employees;
  }
}
