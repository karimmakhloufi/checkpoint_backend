import { DataSource } from "typeorm";
import Book from "./entity/book";

const dataSource = new DataSource({
  type: "sqlite",
  database: "books.sqlite",
  synchronize: true,
  logging: ["error", "query"],
  entities: [Book],
});

export default dataSource;
