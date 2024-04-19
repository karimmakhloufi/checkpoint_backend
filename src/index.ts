import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import dataSource from "./db";
import CountryResolver from "./resolver/country";

const start = async () => {
  await dataSource.initialize();

  const schema = await buildSchema({ resolvers: [CountryResolver] });
  const server = new ApolloServer({ schema: schema });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Server listening at: ${url}`);
};

start();
