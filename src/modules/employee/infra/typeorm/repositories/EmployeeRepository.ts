import { randomUUID } from "crypto";
import { Repository } from "typeorm";

import { AppDataSource } from "@/config/data-source";
import { IEmployeeDTO } from "@/modules/employee/dtos";
import { IEmployeeRepository } from "@/modules/employee/repositories/IEmployeeRepository";
import { Employee } from "../entities/Employee";

export class EmployeeRepository implements IEmployeeRepository {
  private employeeRepository: Repository<Employee>;

  constructor() {
    this.employeeRepository = AppDataSource.getRepository(Employee);
  }

  async create(data: IEmployeeDTO): Promise<void> {
    const employee = Object.assign(
      {
        id: randomUUID(),
        ...data,
      },
      Employee
    );

    await this.employeeRepository.save(employee);
  }

  async list(): Promise<Employee[]> {
    const employees = await this.employeeRepository.find();

    return employees;
  }

  async findEmployeeByID(id: string): Promise<Employee> {
    const employee = await this.employeeRepository.findOneBy({ id });

    return employee;
  }

  async findEmployeeByZipCode(zipCode: number): Promise<Employee[]> {
    const employees = await this.employeeRepository.findBy({
      zip_code: zipCode,
    });

    return employees;
  }

  async updateEmployee(data: IEmployeeDTO, id: string): Promise<void> {
    await this.employeeRepository.update({ id }, data);
  }

  async deleteEmployee(id: string): Promise<void> {
    await this.employeeRepository.delete({ id });
  }
}
