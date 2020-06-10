import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";

function App() {
  const renderRoutes = () =>
    routes.map(({ path, component }) => (
      <Route key={path} path={path} component={component} />
    ));
  return (
    <div className="App">
      <Switch>{renderRoutes()}</Switch>
    </div>
  );
}

export default App;
