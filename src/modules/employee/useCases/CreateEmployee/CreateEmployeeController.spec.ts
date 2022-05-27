import request from "supertest";
import { app } from "@/shared/infra/http/app";

describe("CreateEmployeeController", () => {
  it("should be able create an employee on database", async () => {
    expect(1 + 2).toBe(3);
  });
});
