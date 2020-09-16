import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ADD_MOVIE, FETCH_MOVIES } from '../store/queries/movies';

export default () => {
  const history = useHistory();
  const [title, setTitle] = useState();
  const [overview, setOverview] = useState();
  const [poster_path, setPoster_path] = useState();
  const [popularity, setPopularity] = useState();
  const [tags, setTags] = useState();

  const [addMovie, { data }] = useMutation(ADD_MOVIE, {
    refetchQueries: [{ query: FETCH_MOVIES }],
  });

  console.log(title,
        overview,
        poster_path,
        popularity,
        tags, 'pop');

  const handleClick = (evt) => {
    evt.preventDefault();
    addMovie({
      variables: {
        title,
        overview,
        poster_path,
        popularity,
        tags,
      },
    });
    history.push('/movies');
  };
  return (
    <div
      className="d-md-flex align-items-md-center register-photo p-0"
      style={{ height: '90vh' }}
    >
      <div className="form-container p-2 bg-light shadow-lg">
        <div className="image-holder"></div>
        <form >
          <h2 className="text-center">
            <strong>Add Movie</strong>
          </h2>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              data-toggle="tooltip"
              data-bs-tooltip=""
              data-placement="left"
              name="title"
              placeholder="Title"
              autoFocus
              title="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              data-toggle="tooltip"
              data-bs-tooltip=""
              data-placement="left"
              name="overview"
              placeholder="Overview"
              title="Overview"
              onChange={(e) => setOverview(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              data-toggle="tooltip"
              data-bs-tooltip=""
              data-placement="left"
              name="poster_path"
              placeholder="Poster path"
              title="Poster path"
              onChange={(e) => setPoster_path(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              data-toggle="tooltip"
              data-bs-tooltip=""
              data-placement="left"
              name="popularity"
              placeholder="Popularity"
              title="Popularity"
              onChange={(e) => setPopularity(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              data-toggle="tooltip"
              data-bs-tooltip=""
              data-placement="left"
              name="tags"
              placeholder="Tags"
              title="Tags"
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-block btn-lg border rounded rounded"
              type="button"
              style={{ backgroundColor: '#013c8b', color: 'rgb(255,255,255)' }}
              onClick={handleClick}
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
