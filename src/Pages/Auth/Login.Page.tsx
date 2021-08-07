import React, { useState } from "react";
import { memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaUserCircle, FaSpinner } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import * as yup from "yup";
import { useFormik } from "formik";
import Input from "../../Component/Input/Input";
import { Switch } from "@headlessui/react";
import { login } from "../../api/auth";
import { authAction } from "../../store/actions/auth.actions";

interface Props {}
const Login: React.FC<Props> = (props) => {
  const [enabled, setEnabled] = useState(false);
  const history = useHistory();
  const myform = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().required("Email is required field").email(),
      password: yup.string().required().min(6),
      // ,({min}) =>
      // "Password should have atleast "+min+" characters."
    }),
    onSubmit: (data) => {
      login(data).then((u) => {
        authAction.login(u);
        history.push("/dashboard");
      });
    },
  });

  return (
    <>
      <div className="lg:w-1/2">
        <div className="mx-10 md:mx-20 text-gray-700">
          <div className="flex flex-col justify-center mt-10 py-3 px-11 ">
            <h1 className="text-4xl mb-2">
              Log In To <span className="uppercase text-blue-500">Devs</span>
            </h1>
            <div className="mb-10 text-md pb-1 font-semibold">
              New Here ?
              <Link
                to="/sign"
                className="border-b-2 ml-2 border-blue-500 text-blue-500"
              >
                Create an account
              </Link>{" "}
            </div>
            <form className="" onSubmit={myform.handleSubmit}>
              <Input
                touched={myform.touched.email}
                error={myform.errors.email}
                placeholder="Email address"
                className="pl-10 border-b"
                id="email-address"
                type="email"
                autoComplete="email"
                required
                {...myform.getFieldProps("email")}
              >
                <FaUserCircle className="mb-10 z-50 m-2 w-7 h-7 text-blue-500 absolute"></FaUserCircle>
              </Input>

              <Input
                touched={myform.touched.password}
                error={myform.errors.password}
                placeholder="Password"
                className="pl-10 border-b"
                id="password"
                type={enabled ? "text" : "password"}
                autoComplete="current-password"
                required
                {...myform.getFieldProps("password")}
              >
                <RiLockPasswordLine className="mb-10 z-50 m-2 w-7 h-7 text-blue-500 absolute"></RiLockPasswordLine>
              </Input>
              <div className="flex flex-col justify-start sm:flex-row sm:justify-between sm:items-center mt-5 ">
                <div className="mt-2">
                  <span className="">Show Password </span>
                  <Switch
                    checked={enabled}
                    type="button"
                    onChange={setEnabled}
                    className={`${
                      enabled ? "bg-blue-600 " : "bg-gray-200 "
                    } relative inline-flex items-center h-5 rounded-full w-10 ml-5 `}
                  >
                    <span className="sr-only">Enable notifications</span>
                    <span
                      className={`${
                        enabled
                          ? "translate-x-6 bg-white"
                          : "translate-x-0 bg-blue-500"
                      } inline-block w-4 h-4 transform  rounded-full`}
                    />
                  </Switch>
                </div>
                <button
                  disabled={!myform.isValid}
                  type="submit"
                  className={
                    "w-20 px-3 mt-5 md:mt-0 py-1 rounded-md  bg-blue-600 text-white font-semibold shadow-2xl hover:shadow-none disabled:cursor-not-allowed"
                  }
                >
                  Log In
                </button>
              </div>
              {/* <Button theme="secondary">Sign in </Button> */}
              <div className=" mt-12 mb-4">
                <div className="flex flex-row justify-center items-center">
                  <label
                    htmlFor="logeedIn"
                    className="pl-2 mr-4 font-semibold "
                  >
                    <input
                      type="checkbox"
                      name="logeedIn"
                      id="logeedIn"
                      className="w-6 h-4 focus:bg-red-600"
                    />{" "}
                    Keep Me Logged In{" "}
                  </label>
                </div>
              </div>
              <div className="text-center mt-4 text-blue-500 font-bold text-md">
                <Link to="/forgot">Forgot Password?</Link>
              </div>
              {myform.isSubmitting && (
                <FaSpinner className="animate-spin mx-auto mt-2"></FaSpinner>
              )}
              <div className="mt-16  pt-2 text-justify">
                © 2020 All Rights Reserved.{" "}
                <span className="text-blue-500 font-bold text-md">
                  Devslane
                </span>{" "}
                is a company which is currently working on web development.{" "}
                <span className="text-blue-500 font-bold text-md">
                  Cookie Preferences{" "}
                  <span className="text-gray-700 font-normal">,</span> Privacy
                  <span className="text-gray-700 font-normal">,</span> and
                  Terms.
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

Login.defaultProps = {};
export default memo(Login);
