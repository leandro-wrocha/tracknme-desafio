import { AppDataSource } from "@/config/data-source";

AppDataSource.initialize()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));
