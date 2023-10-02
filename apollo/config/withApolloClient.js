import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { getDataFromTree } from "@apollo/react-ssr";
import withApollo from "next-with-apollo";
import fetch from "isomorphic-unfetch";

export default withApollo(
  ({ initialState, headers }) =>
    new ApolloClient({
      connectToDevTools: process.browser,
      ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
      link: createHttpLink({
        uri: `${process.env.NEXT_PUBLIC_ROOT_URL}/api`,
        credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
        headers,
      }),
      cache: new InMemoryCache({ addTypename: false }).restore(
        initialState || {}
      ),
      fetch,
      defaultOptions: {
        watchQuery: {
          fetchPolicy: "cache-and-network",
          errorPolicy: "all",
        },
        query: {
          fetchPolicy: "cache-and-network",
          errorPolicy: "all",
        },
      },
    }),
  { getDataFromTree }
);
