import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import { clientConfig } from "./graphql/config";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <ApolloProvider client={clientConfig}>
    <App />
  </ApolloProvider>
);
