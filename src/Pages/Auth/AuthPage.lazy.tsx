import { lazy } from "react";

const AuthPageLazy = lazy(() => import("./Auth.Page"));

export default AuthPageLazy;