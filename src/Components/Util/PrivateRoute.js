// protecting routes

import React from "react";
import * as ROUTES from "../../constants/routes";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ allowedRole, path, component }) => {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  if (!userData) {
    return <Redirect to={ROUTES.LOGIN} />;
  }
  if (allowedRole !== undefined && allowedRole !== userData.userRole) {
    return <Redirect to={ROUTES.DASHBOARD} />;
  }
  return <Route path={path} component={component} />;
};

export default PrivateRoute;
