import Book from "../entity/book";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

Resolver(Book);
class BookResolver {
  @Query(() => [Book])
  async getAllBooks() {
    return Book.find();
  }

  @Mutation(() => Book)
  async createNewBook(
    @Arg("author") author: string,
    @Arg("title") title: string
  ) {
    const result = await Book.save({ author, title });
    return result;
  }
}
export default BookResolver;
