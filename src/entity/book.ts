import { Field, ObjectType } from "type-graphql";

@ObjectType()
class Book {
  @Field()
  author: string;
  @Field()
  title: string;
}

export default Book;
