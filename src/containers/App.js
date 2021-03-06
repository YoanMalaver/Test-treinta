import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MapContainer from '../components/MapContainer';
import Informacion from '../components/Informacion';
import Register from '../components/Register';

import '../styles/Navbar.css';
import Layaout from '../components/Layaout';

const App = () => {
  return (
    <Router>
      <Layaout>
        <Switch>
          <Route exact path='/' component={Informacion} />
          <Route exact path='/Mapa' component={MapContainer} />
          <Route exact path='/registro' component={Register} />
        </Switch>
      </Layaout>
    </Router>
  );
};

export default App;
