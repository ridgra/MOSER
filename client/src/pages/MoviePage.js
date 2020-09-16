import React, { useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Card from '../components/Card';
import { gql, useQuery } from '@apollo/client';
import { FETCH_MOVIES, DELETE_MOVIE } from '../store/queries/movies';
// import { GET_FAVORITES } from '../store/queries/favorites';

export default () => {
  const history = useHistory();
  const location = useLocation();
  const { data, loading, error } = useQuery(FETCH_MOVIES);

  // const { data: fave, loading: ld, error: er } = useQuery(GET_FAVORITES, {
  //   onCompleted() {
  //     console.log(fave, '<<<');
  //   },
  // });

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-4 d-md-flex justify-content-center align-items-center align-items-md-center"
          style={{ height: '90vh' }}
        >
          <div className="text-center">
            <h3 className="text1 m-auto">
              Add and modify our Movie Database as you like.
              <br />
            </h3>
            <h4
              className="mt-3 font-weight-light"
              style={{ color: 'rgb(255,255,255)' }}
            >
              Choose your favorite movie too!
              <br />
            </h4>
            <h5
              className="mt-3 font-weight-light"
              style={{ color: 'rgb(197,197,197)' }}
            >
              " Because your life is too easy "<br />
            </h5>
            <div className="d-inline d-md-flex justify-content-md-center mt-3">
              <button
                onClick={() => history.push(location.pathname + '/add')}
                className="btn btn-outline-light mx-2"
                type="button"
              >
                A d d&nbsp; &nbsp;n o w !
              </button>
              <button
                onClick={() => history.push(location.pathname + '/favorites')}
                className="btn btn-outline-light mx-2"
                type="button"
              >
                F a v o r i t e s
              </button>
            </div>
          </div>
        </div>
        <div className="col-8 d-md-flex flex-row flex-wrap" id="scrollview">
          <Card data={data} loading={loading} />
        </div>
      </div>
    </div>
  );
};
