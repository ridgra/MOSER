const { ApolloServer, gql, makeExecutableSchema } = require('apollo-server');
const movieSchema = require('./schemas/movieSchema');
const seriesSchema = require('./schemas/seriesSchema');
const port = 5000;

const typeDefs = gql`
  type Query
  type Mutation
`;

const schema = makeExecutableSchema({
  typeDefs: [typeDefs, movieSchema.typeDefs, seriesSchema.typeDefs],
  resolvers: [movieSchema.resolvers, seriesSchema.resolvers],
});

const server = new ApolloServer({ schema });

server.listen(port).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
