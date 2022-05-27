import { inject, injectable } from "tsyringe";
import { IEmployeeDTO } from "../../dtos";
import { IEmployeeRepository } from "../../repositories/IEmployeeRepository";

@injectable()
export class CreateEmployeeUseCase {
  constructor(
    @inject("EmployeeRepository")
    private employeeRepository: IEmployeeRepository
  ) {}

  async execute(data: IEmployeeDTO): Promise<void> {
    await this.employeeRepository.create(data);
  }
}
