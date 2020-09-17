import { useMutation } from '@apollo/client';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DELETE_MOVIE, FETCH_MOVIES } from '../store/queries/movies';
import { favoritesVar } from '../store/cache';
import { DELETE_SERIES, FETCH_SERIES } from '../store/queries/series';

export default ({ data, loading }) => {
  const { pathname } = useLocation();
  const [deleteMovie] = useMutation(DELETE_MOVIE, {
    refetchQueries: [{ query: FETCH_MOVIES }],
  });

  const [deleteSeries] = useMutation(DELETE_SERIES, {
    refetchQueries: [{ query: FETCH_SERIES }],
  });

  const deleteHandler = (_id) => {
    if (pathname.includes('movies')) {
      deleteMovie({
        variables: {
          _id,
        },
      });
    } else {
      deleteSeries({
        variables: {
          _id,
        },
      });
    }
  };

  if (loading) return <></>;
  const favoriteHandler = (el) => {
    const find = favoritesVar().find((e) => e._id == el._id);
    if (find) return console.log('This item already exists');
    favoritesVar([...favoritesVar(), el]);
  };

  console.log(data, loading);
  return (
    <>
      {data.map((e) => {
        return (
          <div
            key={e._id}
            className="card d-inline shadow m-2"
            style={{
              width: '14em',
              height: '28em',
              backgroundColor: '#010d2d',
            }}
          >
            <div className="card-body p-0 border-0">
              <div
                className="d-md-flex align-items-md-center text-white-50"
                style={{ position: 'absolute', right: '1em', top: '0' }}
              >
                <Link
                  to={`/${pathname == '/movies' ? 'movies' : 'series'}/${
                    e._id
                  }/edit`}
                >
                  <i
                    className="icon ion-compose mr-2"
                    data-toggle="tooltip"
                    data-bs-tooltip=""
                    style={{
                      fontSize: '1.7em',
                      cursor: 'pointer',
                      color: 'rgba(255,255,255,0.8)',
                    }}
                    title="Edit"
                  ></i>
                </Link>
                <i
                  className="icon ion-android-close"
                  data-toggle="tooltip"
                  data-bs-tooltip=""
                  style={{
                    fontSize: '2em',
                    color: 'rgba(255,255,255,0.8)',
                    cursor: 'pointer',
                  }}
                  title="Delete"
                  onClick={() => deleteHandler(e._id)}
                ></i>
              </div>
              <img
                src={e.poster_path}
                style={{ width: '100%', objectFit: 'cover' }}
                alt=""
              />
              <div className="flex-wrap p-2">
                <h5 className="text-truncate text-center text-white">
                  {e.title}
                </h5>
                <hr
                  className="my-1"
                  style={{ backgroundColor: 'rgba(128,132,149,0.45)' }}
                />
                <div>
                  {e.tags.map((tag, idx) => {
                    return (
                      <span
                        key={idx}
                        className="text-white-50 mr-2 font-weight-lighter"
                      >
                        <em>{tag}</em>
                      </span>
                    );
                  })}
                </div>
                <div className="d-flex justify-content-between pt-2">
                  <h6 className="text-white-50 d-inline mb-2">
                    <i
                      className="fas fa-star"
                      style={{ color: 'rgb(217,173,19)' }}
                    ></i>
                    &nbsp;{e.popularity}
                  </h6>
                  <h6
                    className="text-white-50 d-inline mb-2 font-weight-lighter text-white"
                    data-toggle="tooltip"
                    data-bs-tooltip=""
                    title="Add to favorite"
                    style={{ cursor: 'pointer' }}
                    onClick={() => favoriteHandler(e)}
                  >
                    Favorite&nbsp;&nbsp;
                    <i
                      className="far fa-heart"
                      style={{ color: 'rgb(217,173,19)' }}
                    ></i>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
