import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ADD_MOVIE, FETCH_MOVIES } from '../store/queries/movies';
import { ADD_SERIES, FETCH_SERIES } from '../store/queries/series';

export default () => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [poster_path, setPoster_path] = useState('');
  const [popularity, setPopularity] = useState(0);
  const [tags, setTags] = useState([]);
  const { pathname } = useLocation();

  const [AddMovie] = useMutation(ADD_MOVIE, {
    refetchQueries: [{ query: FETCH_MOVIES }],
  });

  const [AddSeries] = useMutation(ADD_SERIES, {
    refetchQueries: [{ query: FETCH_SERIES }],
  });

  const handleClick = (evt) => {
    evt.preventDefault();
    if (pathname.includes('movies')) {
      AddMovie({
        variables: {
          title,
          overview,
          poster_path,
          popularity,
          tags,
        },
      });
      history.push('/movies');
    } else {
      AddSeries({
        variables: {
          title,
          overview,
          poster_path,
          popularity,
          tags,
        },
      });
      history.push('/series');
    }
  };
  return (
    <div
      className="d-md-flex align-items-md-center register-photo p-0"
      style={{ height: '90vh' }}
    >
      <div className="form-container p-2 bg-light shadow-lg">
        <div className="image-holder"></div>
        <form>
          <h2 className="text-center">
            <strong>Add</strong>
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
              onChange={(e) => setPopularity(+e.target.value)}
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
              onChange={(e) => setTags(e.target.value.split(','))}
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
