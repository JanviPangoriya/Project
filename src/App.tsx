import React, { memo, Suspense, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { me } from "./api/auth";
import { LS_AUTH_TOKEN } from "./constant";
import AppContainerPageLazy from "./Pages/AppContainer/AppContainer.lazy";
import AuthPageLazy from "./Pages/Auth/AuthPage.lazy";
import NotFound from "./Pages/NotFound";
import { meSelector } from "./selectors/auth.selectors";
import { useAppSelector } from "./store";
import { authAction } from "./store/actions/auth.actions";
import { ImSpinner9 } from "react-icons/im";

interface Props {}

const App: React.FC<Props> = (props) => {
  const user = useAppSelector(meSelector);
  const token = localStorage.getItem(LS_AUTH_TOKEN);
  useEffect(() => {
    if (!token) return;

    me().then((u) => authAction.fetch(u));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user && token) {
    return (
      <ImSpinner9 className="w-12 h-12 animate-spin mx-auto mt-2"></ImSpinner9>
    );
  }
  return (
    <Suspense
      fallback={
        <ImSpinner9 className="w-12 h-12 animate-spin mx-auto mt-2"></ImSpinner9>
      }
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
              "/groups",
              "/groups/:groupId",
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
