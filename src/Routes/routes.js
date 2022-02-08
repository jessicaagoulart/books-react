import React from 'react';
import PrivateRoute from './private';
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import { Home } from '../screens/Home';
import { Login } from '../screens/Login';

function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route exact path="/" element={<PrivateRoute Component={Home} />} />
        <Route path="/Home" element={<PrivateRoute Component={Home} />} />
        <Route path="/Login" element={<Login />} />
      </Router>
    </BrowserRouter>
  );
}

export default Routes;
