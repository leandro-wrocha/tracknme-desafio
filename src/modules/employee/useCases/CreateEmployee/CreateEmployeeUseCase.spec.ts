import { IEmployeeDTO } from "../../dtos";
import { EmployeeRepositoryFaker } from "../../repositories/fakes/EmployeeRepositoryFaker";
import { CreateEmployeeUseCase } from "./CreateEmployeeUseCase";

let employeeRepositoryFaker = new EmployeeRepositoryFaker();
let createEmployeeUseCase = new CreateEmployeeUseCase(employeeRepositoryFaker);

describe("CreateEmployeeUseCase", () => {
  it("shoul be able create an employee", async () => {
    const data: IEmployeeDTO = {
      name: "Leandro",
      age: 12,
      gender: "masculino",
      zip_code: 55038315,
      address: "Qlqt",
      district: "QL",
      city: "Caruaur",
      state: "PE",
    };

    expect(await createEmployeeUseCase.execute(data)).toBe(void 0);
  });
});
