import React from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ Component }) => {
  const { authenticated } = useSelector((state) => state.user);

  return authenticated ? <Component /> : <Navigate to="/Login" />;
};

export default PrivateRoute;
