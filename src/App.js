import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact='/' component={Home}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
