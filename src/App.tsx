import React, { memo } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LS_LOGIN_TOKEN } from "./api";
import AppContainerPage from "./Pages/AppContainer.Page";
import AuthPage from "./Pages/Auth.Page";
import NotFound from "./Pages/NotFound";

interface Props {}

const App: React.FC<Props> = (props) => {
  const token = localStorage.getItem(LS_LOGIN_TOKEN);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {token ? (
            <Redirect to="/dashboard"></Redirect>
          ) : (
            <Redirect to="/login"></Redirect>
          )}
        </Route>
        <Route path={["/login", "/sign","/forgot"]} exact>
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
  );
};

App.defaultProps = {};
export default memo(App);
