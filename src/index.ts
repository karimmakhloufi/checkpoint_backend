import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import BookResolver from "./resolver/book";
import dataSource from "./db";

const start = async () => {
  await dataSource.initialize();

  const schema = await buildSchema({ resolvers: [BookResolver] });
  const server = new ApolloServer({ schema: schema });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Server listening at: ${url}`);
};

start();
