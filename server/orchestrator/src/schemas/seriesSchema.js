const { gql } = require('apollo-server');
const axios = require('axios');
const Redis = require('ioredis');
const redis = new Redis();

const typeDefs = gql`
  type Series {
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
    fetchSeries: [Series]
    fetchOneSeries(_id: ID): Series
  }

  extend type Mutation {
    addSeries(
      title: String
      overview: String
      poster_path: String
      popularity: Float
      tags: [String]
    ): Series

    editSeries(
      _id: ID
      title: String
      overview: String
      poster_path: String
      popularity: Float
      tags: [String]
    ): Series

    deleteSeries(_id: ID): Series
  }
`;

const baseUrl = `http://localhost:5002/series/`;
const resolvers = {
  Query: {
    fetchSeries: async () => {
      const series = JSON.parse(await redis.get('series'));
      if (series) return series;
      const { data } = await axios.get(baseUrl);
      const red = await redis.set('series', JSON.stringify(data));
      // console.log(red);
      return data;
    },
    fetchOneSeries: async (_, args) => {
      console.log('here');
      const { _id } = args;
      const { data } = await axios.get(baseUrl + _id);
      await redis.del('series');
      return data;
    },
  },
  Mutation: {
    addSeries: async (_, args) => {
      const { data } = await axios.post(baseUrl, args);
      await redis.del('series');
      return data.ops[0];
    },
    editSeries: async (_, args) => {
      const { _id, title, overview, poster_path, popularity, tags } = args;
      const { data } = await axios.put(baseUrl + _id, {
        title,
        overview,
        poster_path,
        popularity,
        tags,
      });
      await redis.del('series');
      return data.value;
    },
    deleteSeries: async (_, args) => {
      const { _id } = args;
      const { data } = await axios.delete(baseUrl + _id);
      // console.log(data);
      await redis.del('series');
      return data.value;
    },
  },
};

module.exports = { typeDefs, resolvers };
