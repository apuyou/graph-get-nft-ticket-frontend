import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "../styles/globals.css";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/apuyou/get-nft-ticket",
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
