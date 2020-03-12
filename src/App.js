import React from 'react';

/***** ROUTER *****/
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/***** STYLES *****/
import './scss/styles.scss';

/***** COMPONENTS *****/
import Home from './components/home/Home';
import Movie from './components/movie/Movie';
import Gallery from './components/gallery/Gallery';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route name="movie" path="/movie" component={Movie}/>
      <Route name="gallery" path="/gallery" component={Gallery}/>
    </Switch>
  </Router>
);

export default App;
