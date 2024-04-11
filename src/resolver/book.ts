import Book from "../entity/book";
import { Query, Resolver } from "type-graphql";

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

Resolver(Book);
class BookResolver {
  @Query(() => [Book])
  async getAllBooks() {
    return books;
  }
}
export default BookResolver;
