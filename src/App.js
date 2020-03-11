import React from 'react';

/***** ROUTER *****/
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/***** STYLES *****/
import './scss/styles.scss';

/***** COMPONENTS *****/
import Home from './components/home/Home';
import Movie from './components/movie/Movie';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route name="movie" path="/movie" component={Movie}/>
    </Switch>
  </Router>
);

export default App;
