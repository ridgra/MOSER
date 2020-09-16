const { gql } = require('apollo-server');
const axios = require('axios');
const Redis = require('ioredis');
const redis = new Redis();

const typeDefs = gql`
  type Movie {
    _id: ID
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
    createdAt: String
    updatedAt: String
  }

  extend type Query {
    fetchMovies: [Movie]
    fetchOneMovie(_id: ID): Movie
  }

  extend type Mutation {
    addMovie(
      title: String
      overview: String
      poster_path: String
      popularity: Float
      tags: [String]
    ): Movie

    editMovie(
      _id: ID
      title: String
      overview: String
      poster_path: String
      popularity: Float
      tags: [String]
    ): Movie

    deleteMovie(_id: ID): Movie
  }
`;

const baseUrl = `http://localhost:5001/movies/`;
const resolvers = {
  Query: {
    fetchMovies: async () => {
      const movies = JSON.parse(await redis.get('movies'));
      if (movies) return movies;
      const { data } = await axios.get(baseUrl);
      const red = await redis.set('movies', JSON.stringify( data ));
      // console.log(red);
      return data;
    },
    fetchOneMovie: async (_, args) => {
      const { _id } = args;
      const { data } = await axios.get(baseUrl + _id);
      return data;
    },
  },
  Mutation: {
    addMovie: async (_, args) => {
      const { data } = await axios.post(baseUrl, args);
      await redis.del('movies');
      return data.ops[0];
    },
    editMovie: async (_, args) => {
      const { _id, title, overview, poster_path, popularity, tags } = args;
      const { data } = await axios.put(baseUrl + _id, {
        title,
        overview,
        poster_path,
        popularity,
        tags,
      });
      await redis.del('movies');
      return data.value;
    },
    deleteMovie: async (_, args) => {
      const { _id } = args;
      const { data } = await axios.delete(baseUrl + _id);
      // console.log(data);
      await redis.del('movies');
      return data.value;
    },
  },
};

module.exports = { typeDefs, resolvers };
