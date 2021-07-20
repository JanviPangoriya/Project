import React from "react";
import { memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { HiLockClosed, HiUser } from "react-icons/hi";
import { FaSpinner } from "react-icons/fa";
import { useState } from "react";
interface Props {}
const Login: React.FC<Props> = (props) => {
  const [data, setData] = useState({ email: "", password: "" });

  const [touched, setTouched] = useState({ email: false, password: false });

  const [submitting, setSubmitting] = useState(false);

  let history = useHistory();
  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nameOfChangeInput = e.target.name;
    setData({ ...data, [nameOfChangeInput]: e.target.value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const nameOfBlurInput = e.target.name;
    setTouched({ ...touched, [nameOfBlurInput]: true });
  };
  const allowed = () => {
    if (emailError === "" && passwordError === "") {
      return true;
    } else {
      return false;
    }
  };
  let emailError = "";
  let passwordError = "";

  if (!data.email) {
    emailError = "Email is required";
  } else if (!data.email.endsWith("@gmail.com")) {
    emailError = "Please enter a valid email address";
  }

  if (!data.password) {
    passwordError = "Password is required";
  } else if (data.password.length < 8) {
    passwordError = "Password should be atleast 8 characters";
  }
  return (
    <>
      <div className="lg:w-1/2">
        <div className="mx-20 text-gray-700">
          <div className="flex flex-col justify-center h-screen py-3 px-11 ">
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
            <form
              className=""
              onSubmit={(e) => {
                e.preventDefault();
                if (emailError || passwordError) {
                  console.log("rejceted");
                  return;
                }
                setSubmitting(true);
                setTimeout(() => {
                  console.log(data);

                  history.push("/dashboard");
                }, 5000);
              }}
            >
              <div className="h-20 mb-1 pt-3 pb-6">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <HiUser className="mb-10 z-50 m-2 w-7 h-7 text-blue-500 absolute"></HiUser>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative appearance-none rounded-none block p-10 w-full h-12 pl-10 py-5 border-b border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  value={data.email}
                  onChange={handlechange}
                  onBlur={handleBlur}
                  placeholder="Email address"
                />
                {touched.email && (
                  <div className="text-red-600 font-semibold ml-10 mt-1">
                    {emailError}
                  </div>
                )}
              </div>
              <div className="h-20 mb-2 pt-3 pb-6">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <HiLockClosed className="mb-10 z-50 m-2 w-7 h-7 text-blue-500 absolute"></HiLockClosed>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className=" relativeappearance-none rounded-none relative block p-10 w-full h-12 pl-10 py-2 border-b border-gray-300 placeholder-gray-700 placeholder-opacity-95  text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  value={data.password}
                  onChange={handlechange}
                  onBlur={handleBlur}
                  placeholder="Password"
                />
                {touched.password && (
                  <div className="text-red-600 font-semibold ml-10 mt-1">
                    {passwordError}
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-start md:flex-row md:justify-between md:items-center mt-5 ">
                {" "}
                <div className="flex-row flex ">
                  <span className="mr-5">Show Password</span>
                  <div className="relative">
                    <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                    <div className="absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                  </div>
                </div>
                <button
                  disabled={!allowed()}
                  type="submit"
                  className={
                    "w-20 px-3 mt-5 md:mt-0 py-1 rounded-md bg-blue-600 text-white font-semibold shadow-2xl hover:shadow-none "
                  }
                >
                  Log In
                </button>
              </div>
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
              {submitting && (
                <FaSpinner className="animate-spin mx-auto mt-2"></FaSpinner>
              )}
              <div className="mt-20">
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
