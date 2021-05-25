import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MapContainer from '../components/MapContainer';
import Informacion from '../components/Informacion';
// import MapContainer from '../components/MapContainer';
// import Menu from '../components/Menu';
import '../styles/Navbar.css';
import Layaout from '../components/Layaout';

const App = () => {
  return (
    <Router>
      <Layaout>
        <Switch>
          <Route exact path='/' component={Informacion} />
          <Route exact path='/Mapa' component={MapContainer} />
          {/* <Route exact path='/crearseniorities' component={CrearSeniorities} /> */}
        </Switch>
      </Layaout>
    </Router>
  );
};

export default App;
