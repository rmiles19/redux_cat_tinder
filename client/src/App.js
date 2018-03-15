import React from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import { Switch, Route } from 'react-router-dom';
import FetchUser from './components/FetchUser'
import ProtectedRoute from './components/ProtectedRoute';

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <ProtectedRoute exact path='/' component={Home} />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default App;