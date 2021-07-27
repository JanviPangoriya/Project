import React, { memo } from "react";
import { Route, Switch } from "react-router-dom";
import AuthHero from "../Component/AuthHero";
import ForgotPassword from "./ForgotPassword.page";
import LoginPage from "./Login.Page";
import SignupPage from "./Signup.Page";

interface Props {}

const Auth: React.FC<Props> = (props) => {
  return (
    <div className="flex lg:flex-row lg:justify-between">
      <Switch>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/sign" exact>
          <SignupPage />
        </Route>
        <Route path="/forgot" exact>
          <ForgotPassword />
        </Route>
      </Switch>

      <AuthHero />
    </div>
  );
};

Auth.defaultProps = {};
export default memo(Auth);
