import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { MoviePage, AddPage, EditPage, FavoritePage } from '../pages';

const RouterView = () => {
  return (
    <Switch>
      <Route exact path="/movies" component={MoviePage} />
      <Route path="/movies/add" component={AddPage} />
      <Route path="/movies/:id/edit" component={EditPage} />
      <Route path="/movies/favorites" component={FavoritePage} />
      <Route exact path="/series" component={MoviePage} />
      <Route path="/series/add" component={AddPage} />
      <Route path="/series/:id/edit" component={EditPage} />
      <Route path="/series/favorites" component={FavoritePage} />
      <Redirect from="/" to="/movies" />
    </Switch>
  );
};

export default RouterView;
