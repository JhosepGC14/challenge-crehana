import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

export const clientConfig = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://countries.trevorblades.com/",
  }),
});
