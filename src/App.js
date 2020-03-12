import React from 'react';

/***** ROUTER *****/
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/***** STYLES *****/
import './scss/styles.scss';

/***** COMPONENTS *****/
import Home from './components/home/Home';
import Movie from './components/movie/Movie';
import movieArticle from './components/movie/article/MovieArticle';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route name="movie" path="/movie" component={Movie}/>
      <Route name="movie" path="/moviearticle" component={movieArticle}/>
    </Switch>
  </Router>
);

export default App;
