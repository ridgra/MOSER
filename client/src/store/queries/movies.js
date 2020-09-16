import { gql } from '@apollo/client';

export const FETCH_MOVIES = gql`
  query {
    fetchMovies {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

export const FETCH_ONE_MOVIE = gql`
  query fetchOneMovie($_id: ID) {
    fetchOneMovie(_id: $_id) {
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

export const ADD_MOVIE = gql`
  mutation addMovie(
    $title: String
    $overview: String
    $poster_path: String
    $popularity: Float
    $tags: [String]
  ) {
    addMovie(
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

export const EDIT_MOVIE = gql`
  mutation editMovie(
    $_id: ID
    $title: String
    $overview: String
    $poster_path: String
    $popularity: Float
    $tags: [String]
  ) {
    editMovie(
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

export const DELETE_MOVIE = gql`
  mutation deleteMovie($_id: ID) {
    deleteMovie(_id: $_id) {
      _id
    }
  }
`;
