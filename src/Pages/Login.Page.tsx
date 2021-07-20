import React from "react";
import { memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { HiLockClosed, HiUser } from "react-icons/hi";
import { FaSpinner } from "react-icons/fa";
import * as yup from "yup";
import { useFormik } from "formik";
import Input from "../Component/Input/Input";
import Button from "../Component/Button/Button";

interface Props {}
const Login: React.FC<Props> = (props) => {
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
      // "Password should have atleset "+min+" characters."
    }),
    onSubmit: (data) => {
      console.log("form submitting ", data);
      setTimeout(() => {
        history.push("/dashboard");
      }, 5000);
    },
  });

  return (
    <>
      <div className="lg:w-1/2">
        <div className="mx-0 md:mx-20 text-gray-700">
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
                text="Email address"
                id="email-address"
                type="email"
                autoComplete="email"
                required
                {...myform.getFieldProps("email")}
              >
                <HiUser className="mb-10 z-50 m-2 w-7 h-7 text-blue-500 absolute"></HiUser>
              </Input>

              <Input
                touched={myform.touched.password}
                error={myform.errors.password}
                text="Password"
                id="password"
                type="password"
                autoComplete="current-password"
                required
                {...myform.getFieldProps("password")}
              >
                <HiLockClosed className="mb-10 z-50 m-2 w-7 h-7 text-blue-500 absolute"></HiLockClosed>
              </Input>
              <div className="flex flex-col justify-start sm:flex-row sm:justify-between sm:items-center mt-5 ">
                <div className="flex-row flex ">
                  <span className="mr-5">Show Password</span>
                  <div className="relative">
                    <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                    <div className="absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                  </div>
                </div>
                <button
                  disabled={!myform.isValid}
                  type="submit"
                  className={
                    "w-20 px-3 mt-5 md:mt-0 py-1 rounded-md bg-blue-600 text-white font-semibold shadow-2xl hover:shadow-none "
                  }
                  >
                  Log In
                </button>

              </div>
                  {/* <Button theme="secondary">Sign in </Button> */}
              <div className=" mt-16 mb-4">
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
                Forgot Password?
              </div>
              {myform.isSubmitting && (
                <FaSpinner className="animate-spin mx-auto mt-2"></FaSpinner>
              )}
              <div className="mt-20 text-justify">
                © 2020 All Rights Reserved.{" "}
                <span className="text-blue-500 font-bold text-md">
                  Devslane
                </span>{" "}
                is a comapny which is currently working on web development.{" "}
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
