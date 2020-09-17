import { gql } from '@apollo/client';

export const FETCH_SERIES = gql`
  query {
    fetchSeries {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

export const FETCH_ONE_SERIES = gql`
  query fetchOneSeries($_id: ID) {
    fetchOneSeries(_id: $_id) {
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

export const ADD_SERIES = gql`
  mutation AddSeries(
    $title: String
    $overview: String
    $poster_path: String
    $popularity: Float
    $tags: [String]
  ) {
    addSeries(
      title: $title
      overview: $overview
      poster_path: $poster_path
      popularity: $popularity
      tags: $tags
    ) {
      _id
    }
  }
`;

export const EDIT_SERIES = gql`
  mutation editSeries(
    $_id: ID
    $title: String
    $overview: String
    $poster_path: String
    $popularity: Float
    $tags: [String]
  ) {
    editSeries(
      _id: $_id
      title: $title
      overview: $overview
      poster_path: $poster_path
      popularity: $popularity
      tags: $tags
    ) {
      _id
    }
  }
`;

export const DELETE_SERIES = gql`
  mutation deleteSeries($_id: ID) {
    deleteSeries(_id: $_id) {
      _id
    }
  }
`;
