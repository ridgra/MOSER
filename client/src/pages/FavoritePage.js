import React, { useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { FETCH_MOVIES, DELETE_MOVIE } from '../store/queries/movies';
import { GET_FAVORITES } from '../store/queries/favorites';
import FavoritesCard from '../components/FavoritesCard';

export default () => {
  const history = useHistory();
  const location = useLocation();

  const { data, loading } = useQuery(GET_FAVORITES, {
    onCompleted() {
      console.log(data, '<<<');
    },
  });

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-4 d-md-flex justify-content-center align-items-center align-items-md-center"
          style={{ height: '90vh' }}
        >
          <div className="text-center">
            <h3 className="text1 m-auto">
              Your favorites movie is here.
              <br />
            </h3>
            <h4
              className="mt-3 font-weight-light"
              style={{ color: 'rgb(255,255,255)' }}
            >
              There is still much you can add!
              <br />
            </h4>

            <div className="d-inline d-md-flex justify-content-md-center mt-3">
              <button
                onClick={() => history.push('/movies')}
                className="btn btn-outline-light mx-2"
                type="button"
              >
                A d d&nbsp; &nbsp;m o r e !
              </button>
            </div>
          </div>
        </div>
        <div className="col-8 d-md-flex flex-row flex-wrap" id="scrollview">
          <FavoritesCard data={data.favorites} loading={loading} />
        </div>
      </div>
    </div>
  );
};
