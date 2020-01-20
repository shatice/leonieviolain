import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom';
import './scss/styles.scss';

/***** COMPONENTS *****/
import Home from './components/Home.jsx';
import Chienne from './components/Chienne.jsx';
import Piscine from './components/Piscine.jsx';
import Raptus from './components/Raptus.jsx';
import Apache from './components/Apache.jsx';
import Desiderare from './components/Desiderare.jsx';

const App = () => (
  <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route name="" path="/chienne" component={Chienne}/>
        <Route name="" path="/piscine" component={Piscine}/>
        <Route name="" path="/raptus" component={Raptus}/>
        <Route name="" path="/apache" component={Apache}/>
        <Route name="" path="/desiderare" component={Desiderare}/>
      </Switch>
  </Router>
);

export default App;
