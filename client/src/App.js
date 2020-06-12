import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import Layout from "./components/mod/Layout";
import Error404 from "./pages/Error404";

function App() {
  const renderRoutes = () =>
    routes.map((route) => <Route key={route.path} {...route} />);
  return (
    <div className="App">
      <Layout>
        <Switch>
          {renderRoutes()}
          <Route component={Error404} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
