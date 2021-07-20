import React, { memo } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AppContainerPage from "./Pages/AppContainer.Page";
import AuthPage from "./Pages/Auth.Page";
import NotFound from "./Pages/NotFound";

interface Props {}

const App: React.FC<Props> = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login"></Redirect>
          </Route>
          <Route path={["/login", "/sign"]} exact>
            <AuthPage />
          </Route>
          <Route
            path={[
              "/dashboard",
              "/recordings",
              "/batch/:batchNumber/lecture/:lectureNumber",
            ]}
            exact
          >
            <AppContainerPage />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

App.defaultProps = {};
export default memo(App);
