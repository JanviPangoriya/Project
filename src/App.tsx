import React, { memo, Suspense, useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { me } from "./api/auth";
import { LS_LOGIN_TOKEN } from "./api/base";
import AppContext from "./App.context";
import { User } from "./model/User";
import AppContainerPageLazy from "./Pages/AppContainer/AppContainer.lazy";
import AuthPageLazy from "./Pages/Auth/AuthPage.lazy";
import NotFound from "./Pages/NotFound";
import { AppState } from "./store";

interface Props {}

const App: React.FC<Props> = (props) => {
  const user = useSelector<AppState, User | undefined>((state) => state.me);
  const token = localStorage.getItem(LS_LOGIN_TOKEN);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token) return;

    me().then((u) => dispatch({ type: "me/fetch", payload: u }));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user && token) {
    return <div>Loading...</div>;
  }
  return (
    <Suspense
      fallback={<FaSpinner className="animate-spin mx-auto mt-2"></FaSpinner>}
    >
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {user ? (
              <Redirect to="/dashboard"></Redirect>
            ) : (
              <Redirect to="/login"></Redirect>
            )}
          </Route>
          <Route path={["/login", "/sign", "/forgot"]} exact>
            {user ? <Redirect to="/dashboard"></Redirect> : <AuthPageLazy />}
          </Route>
          <Route
            path={[
              "/dashboard",
              "/recordings",
              "/profile",
              "/batch/:batchNumber/lecture/:lectureNumber",
            ]}
            exact
          >
            {user ? (
              <AppContainerPageLazy />
            ) : (
              <Redirect to="/login"></Redirect>
            )}
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

App.defaultProps = {};
export default memo(App);
