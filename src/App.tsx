import React, {  memo, Suspense, useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { me } from "./api/auth";
import { LS_LOGIN_TOKEN } from "./api/base";
import AppContext from "./App.context";
import { User } from "./model/User";
import AppContainerPageLazy from "./Pages/AppContainer/AppContainer.lazy";
import AuthPageLazy from "./Pages/Auth/AuthPage.lazy";
import NotFound from "./Pages/NotFound";

interface Props {}

const App: React.FC<Props> = (props) => {
  const [user, setUser] = useState<User>();
  const token = localStorage.getItem(LS_LOGIN_TOKEN);

  useEffect(() => {
    if (!token) return;

    me().then((u) => setUser(u));
  },);

  if (!user && token) {
    return <div>Loading...</div>;
  }
  return (
    <AppContext.Provider value={{ user, setUser }}>
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
    </AppContext.Provider>
  );
};

App.defaultProps = {};
export default memo(App);
