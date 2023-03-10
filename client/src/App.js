import React from "react";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import Home from "./pages/home";
const httpLink = createHttpLink({ uri: "graphql" });
const client = new ApolloClient({ link: httpLink, cache: new InMemoryCache() });

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className={"flex-column justify-flex-start min-100-vh"}>
        <header className={"bg-secondary mb-4 py-2 flex-row align center"}>
          <div
            className={
              "container flex-column justify-space-between-lg justify center align-center"
            }
          >
            <h1>GraphQL Library!</h1>
            <div className={"container"}>
              <Home />
            </div>
          </div>
        </header>
      </div>
    </ApolloProvider>
  );
};

export default App;
