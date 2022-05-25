import { IEmployeeDTO } from "../dtos";
import { Employee } from "../infra/typeorm/entities/Employee";

export interface IEmployeeRepository {
  create: (data: IEmployeeDTO) => Promise<void>;
  list: () => Promise<Employee[]>;
  findEmployeeByID: (id: string) => Promise<Employee>;
  findEmployeeByZipCode: (zipCode: number) => Promise<Employee[] | Employee>;
  updateEmployee: (data: IEmployeeDTO) => Promise<void>;
  deleteEmployee: (id: string) => Promise<void>;
}
