import {ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
  uri:'https://api-sa-east-1.graphcms.com/v2/cl4o7xcbp0z2k01xr5ig39ssq/master',
  cache: new InMemoryCache()
})