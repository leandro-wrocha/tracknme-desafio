import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("employees")
export class Employee {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  zip_code: number;

  @Column()
  gender: string;

  @Column()
  address: string;

  @Column()
  district: string;

  @Column()
  city: string;

  @Column()
  state: string;
}
