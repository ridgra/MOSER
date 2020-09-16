import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { MoviePage, AddMovie, EditPage, FavoritePage } from '../pages';

const RouterView = () => {
  return (
    <Switch>
      {/* <Redirect to="movies" /> */}
      <Route exact path="/movies" component={MoviePage} />
      <Route path="/movies/add" component={AddMovie} />
      <Route path="/movies/:id/edit" component={EditPage} />
      <Route path="/movies/favorites" component={FavoritePage} />
      <Redirect from="/" to="/movies" />
    </Switch>
  );
};

export default RouterView;
