import { randomUUID } from "crypto";

import { IEmployeeDTO } from "../../dtos";
import { Employee } from "../../infra/typeorm/entities/Employee";
import { IEmployeeRepository } from "../IEmployeeRepository";

export class EmployeeRepositoryFaker implements IEmployeeRepository {
  private employees: Employee[];

  constructor() {
    this.employees = [];
  }

  async create(data: IEmployeeDTO): Promise<void> {
    const employee = Object.assign(
      {
        id: randomUUID(),
        ...data,
      },
      Employee
    );

    this.employees.push(employee);
  }

  list: () => Promise<Employee[]>;
  findEmployeeByID: (id: string) => Promise<Employee>;
  findEmployeeByZipCode: (zipCode: number) => Promise<Employee[]>;
  updateEmployee: (data: IEmployeeDTO, id: string) => Promise<void>;
  deleteEmployee: (id: string) => Promise<void>;
}
