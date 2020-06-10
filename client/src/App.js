import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import Layout from "./components/mod/Layout";

function App() {
  const renderRoutes = () =>
    routes.map(({ path, component }) => (
      <Route key={path} path={path} component={component} />
    ));
  return (
    <div className="App">
      <Switch>
        <Layout>{renderRoutes()}</Layout>
      </Switch>
    </div>
  );
}

export default App;
