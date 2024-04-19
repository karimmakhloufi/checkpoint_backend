import { DataSource } from "typeorm";
import Country from "./entity/country";

const dataSource = new DataSource({
  type: "sqlite",
  database: "countries.sqlite",
  synchronize: true,
  logging: ["error", "query"],
  entities: [Country],
});

export default dataSource;
