import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import Input from "../../Component/Input/Input";
import { SiMailDotRu } from "react-icons/si";

interface Props {}

const ForgotPassword: React.FC<Props> = (props) => {
  const myform = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().required("Email is required field").email(),
    }),
    onSubmit: (data) => {
      console.log(data);
    },
  });
  return (
    <>
      <div className="lg:w-1/2">
        <div className="mx-0 md:mx-0 text-gray-400">
          <div className="flex flex-col justify-center mt-32 py-3 px-28 ">
            <h1 className="text-5xl leading-snug mb-1 tracking-wide text-gray-600">
              Password Recovery
            </h1>
            <div className="mb-10 text-sm pb-1 font-bold  text-gray-600">
              Enter your email and instructions will sent to you!
            </div>
            <form className="" onSubmit={myform.handleSubmit}>
              <Input
                touched={myform.touched.email}
                error={myform.errors.email}
                className="pl-10 border-b"
                placeholder="Email address"
                id="email-addresss"
                type="email"
                autoComplete="email"
                required
                {...myform.getFieldProps("email")}
              >
                <SiMailDotRu className="mt-4 z-50 m-2 w-5 h-5 text-blue-500 absolute"></SiMailDotRu>
              </Input>
            </form>
            <button
              disabled={!myform.isValid}
              type="submit"
              className={
                "text-md w-20 px-3 mt-1 py-1.5 rounded-md bg-blue-600 text-white shadow-2xl hover:shadow-none "
              }
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

ForgotPassword.defaultProps = {};
export default ForgotPassword;
