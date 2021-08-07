import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import Input from "../../Component/Input/Input";
import { meSelector } from "../../selectors/auth.selectors";
import {  useAppSelector } from "../../store";
interface Props {}

const Profile: React.FC<Props> = (props) => {
   const user = useAppSelector(meSelector);
  const myform = useFormik({
    initialValues: {
      first_name: "",
      middle_name: "",
      last_name: "",
          roles: "",
      date:"",
      title: "",
    },
    validationSchema: yup.object().shape({
      first_name: yup.string().required(),
      title: yup.string().required(),
      middle_name: yup.string().required(),
      last_name: yup.string().required(),
      roles: yup.string().required(),
    }),
    onSubmit: (data) => {},
  });
  return (
    <div className="w-full md:ml-60  bg-gray-300 h-full pb-5">
      <h1 className="absolute uppercase pt-5 text-gray-600 font-semibold top-32 left-14 md:left-80">
        general information
      </h1>
      <div className="mt-20 bg-white mx-5 pl-8 pb-5 flex flex-col justify-start md:flex-row  md:items-center">
        <div className="pt-20 md:pt-12 md:items-center flex flex-col md:mr-20">
          <img
            src={user!.profile_pic_url}
            alt=""
            className="w-32 h-32 rounded-xl "
          />
          <h3 className="pt-5 pl-1 text-blue-800 font-semibold cursor-pointer">
            Upload Picture
          </h3>
        </div>
        <form
          className="mt-10 md:mt-16 text-gray-500 "
          onSubmit={myform.handleSubmit}
        >
          <div className="flex flex-col justify-between md:flex-row">
            <div>
              <label htmlFor="">First Name</label>
              <Input
                touched={myform.touched.first_name}
                error={myform.errors.first_name}
                placeholder="First Name"
                id="first_name"
                type="text"
                className="border-2 border-gray-400 md:w-80 md:mr-10"
                required
                {...myform.getFieldProps("first_name")}
              ></Input>
            </div>
            <div>
              <label htmlFor="">Middle Name</label>
              <Input
                touched={myform.touched.middle_name}
                error={myform.errors.middle_name}
                placeholder="Middle Name"
                className="border-2 border-gray-400 md:w-80"
                id="middle_name"
                type="text"
                required
                {...myform.getFieldProps("middle_name")}
              ></Input>
            </div>
          </div>
          <div className="flex-flex-row ">
            <label htmlFor="">Last Name</label>
            <Input
              touched={myform.touched.last_name}
              error={myform.errors.last_name}
              placeholder="Last Name"
              className="border-2 border-gray-400 md:w-80"
              id="last_name"
              type="text"
              required
              {...myform.getFieldProps("last_name")}
            ></Input>
          </div>

          <label htmlFor="">Date Of Birth</label>
          <Input
            touched={myform.touched.roles}
            error={myform.errors.roles}
            placeholder="Date"
            className="border-2 border-gray-400 md:w-80"
            id="date"
            type="date"
            required
            {...myform.getFieldProps("date")}
          ></Input>
        </form>
      </div>
      <div className="flex flex-row justify-between m-3 mb-0">
        <button className="px-3 py-2 w-28 border-2 text-black text-lg border-red-400 bg-red-300 hover:bg-red-200 hover:border-none">
          Reset
        </button>
        <button className="px-3 py-2 w-40 border-2 text-black text-lg border-green-400 bg-green-300 hover:bg-green-200 hover:border-none">
          Save Changes
        </button>
      </div>
    </div>
  );
};

Profile.defaultProps = {};
export default React.memo(Profile);
