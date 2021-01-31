import { ApolloClient, InMemoryCache } from '@apollo/client';
import { favoritesVar } from '../cache';

export const client = new ApolloClient({
  // uri: 'http://localhost:5000/',
  uri: 'http://ec2-13-212-48-180.ap-southeast-1.compute.amazonaws.com:5000/',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          favorites: {
            read() {
              return favoritesVar();
            },
          },
        },
      },
    },
  }),
});
