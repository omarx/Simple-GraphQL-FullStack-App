const express = require("express");
require("dotenv").config();
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");

const db = require("./config/connection");
const port = process.env.PORT || 5000;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.once("open", () => {
  console.log(`Db is live`);
  server.start().then(
    app.listen(port, () => {
      server.applyMiddleware({ app });
      console.log(`Server is running on ${port}`);
      console.log(
        `The graphQL playground is configured at http://localhost:${port}${server.graphqlPath}`
      );
    })
  );
});
