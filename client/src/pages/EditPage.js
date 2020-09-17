import { gql, useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import {
  FETCH_MOVIES,
  FETCH_ONE_MOVIE,
  EDIT_MOVIE,
} from '../store/queries/movies';
import {
  FETCH_SERIES,
  FETCH_ONE_SERIES,
  EDIT_SERIES,
} from '../store/queries/series';

export default () => {
  const history = useHistory();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [poster_path, setPoster_path] = useState('');
  const [popularity, setPopularity] = useState(0);
  const [tags, setTags] = useState([]);
  const { pathname } = useLocation();

  if (pathname.includes('/movies')) {
    const { data } = useQuery(FETCH_ONE_MOVIE, {
      variables: { _id: id },
      fetchPolicy: 'no-cache',
      onCompleted() {
        setTitle(data.fetchOneMovie.title);
        setOverview(data.fetchOneMovie.overview);
        setPoster_path(data.fetchOneMovie.poster_path);
        setPopularity(data.fetchOneMovie.popularity);
        setTags(data.fetchOneMovie.tags);
      },
    });
  } else {
    const { data } = useQuery(FETCH_ONE_SERIES, {
      variables: { _id: id },
      fetchPolicy: 'no-cache',
      onCompleted() {
        setTitle(data.fetchOneSeries.title);
        setOverview(data.fetchOneSeries.overview);
        setPoster_path(data.fetchOneSeries.poster_path);
        setPopularity(data.fetchOneSeries.popularity);
        setTags(data.fetchOneSeries.tags);
      },
    });
  }

  const [editMovie] = useMutation(EDIT_MOVIE, {
    refetchQueries: [{ query: FETCH_MOVIES }],
  });

  const [editSeries] = useMutation(EDIT_SERIES, {
    refetchQueries: [{ query: FETCH_SERIES }],
  });

  const handleClick = () => {
    
    if (pathname.includes('movies')) {
      editMovie({
        variables: {
          _id: id,
          title,
          overview,
          poster_path,
          popularity,
          tags,
        },
      });
      history.push('/movies');
    } else {
      editSeries({
        variables: {
          _id: id,
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
            <strong>Edit</strong>
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
              value={title}
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
              value={overview}
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
              value={poster_path}
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
              value={popularity}
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
              value={tags}
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
