import { useFormik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { updateMe } from "../../api/user";
import Button from "../../Component/Button/Button";
import { handleError } from "../../Component/Card";
import Input from "../../Component/Input/Input";
import { meSelector } from "../../selectors/auth.selectors";
// import { uiSideBarSelector } from "../../selectors/ui.selectors";
import { useAppSelector } from "../../store";
import { userActions } from "../../store/actions/user.actions";
interface Props {}

const Profile: React.FC<Props> = (props) => {
  const user = useAppSelector(meSelector);
  // const isSidebarOpen = useAppSelector(uiSideBarSelector);
  const history = useHistory();
  const { handleSubmit, getFieldProps, touched, errors } = useFormik({
    enableReinitialize: true,

    initialValues: {
      // birth_date: user!.birth_date === null ? "" : user!.birth_date,
      // birth_month: user!.birth_month === null ? "" : user!.birth_month,
      // birth_year: user!.birth_year === null ? "" : user!.birth_year,
      first_name: user!.first_name === null ? "" : user!.first_name,
      middle_name: user!.middle_name === null ? "" : user!.middle_name,
      last_name: user!.last_name === null ? "" : user!.last_name,
      email: user!.email === null ? "" : user!.email,
      phone_number: user!.phone_number === null ? "" : user!.phone_number,
      // education: user!.education === null ? "" : user!.education,
    },
    validationSchema: yup.object().shape({
      first_name: yup
        .string()
        .required("First Name is required")
        .max(20)
        .min(3),
      middle_name: yup.string(),
      last_name: yup.string().required("Last Name is required").max(20).min(3),
      email: yup.string().required().email("Enter a valid email."),
      phone_number: yup
        .number()
        .positive()
        .required()
        .moreThan(999999999, "Enter 10 digits")
        .lessThan(10000000000, "Enter 10 digits"),
      // education: yup.string().min(2).max(35),
    }),
    onSubmit: (data) => {
      updateMe(data).then((u) => {
        userActions.update(u);
        history.push("/dashboard");
      });
    },
  });

  return (
    <>
      <div
        className={
          "mt-20 mx-auto tranform duration-500 ease-in-out "
          // (isSidebarOpen ? "md:ml-64 mt-20 " : "")
        }
      >
        <h1 className="text-lg underline">General Information</h1>
        <form onSubmit={handleSubmit} className="mt-5 mx-auto ">
          <div>
            <img
              src={user?.profile_pic_url}
              alt=""
              className="w-24 h-24 mx-auto rounded-full "
              onError={handleError}
            />
          </div>
          <div className="md:flex">
            <div className="mt-0">
              <div className="flex flex-col mb-1">
                <div className="flex flex-col ">
                  <label htmlFor="">First Name</label>
                  <Input
                    id="first_name"
                    placeholder="first_name"
                    touched={touched.first_name}
                    error={errors.first_name}
                    {...getFieldProps("first_name")}
                  />
                </div>

                <div className="flex flex-col flex-grow ">
                  <label htmlFor="">Middle Name</label>
                  <Input
                    placeholder="Middle Name"
                    id="middle_name"
                    touched={touched.middle_name}
                    error={errors.middle_name}
                    {...getFieldProps("middle_name")}
                  />
                </div>

                <div className="flex flex-col flex-grow ">
                  <label htmlFor="">Last Name</label>
                  <Input
                    placeholder="Last Name"
                    id="last_name"
                    touched={touched.last_name}
                    error={errors.last_name}
                    {...getFieldProps("last_name")}
                  />
                </div>
              </div>
            </div>
          </div>
        
          <div className="md:flex mb-1">
            <div className="md:w-1/2  mb-1">
              <label htmlFor="">Email address</label>
              <Input
                placeholder="email"
                id="email"
                type="email"
                touched={touched.email}
                error={errors.email}
                {...getFieldProps("email")}
              />
            </div>
          </div>

          <div className="md:flex md:mb-3">
            <div className="md:w-1/2 mb-1">
              <label htmlFor="">Phone Number</label>
              <Input
                id="phone_number"
                placeholder="phone_number"
                touched={touched.phone_number}
                error={errors.phone_number}
                {...getFieldProps("phone_number")}
              />
            </div>
          </div>
          <div className="flex justify-between px-5 rounded-t-md w-96 space-x-3 -700">
            <Button type="reset" fill="solid" theme="error">
              Reset All
            </Button>
            <Button type="submit" fill="solid" theme="success" className="">
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

Profile.defaultProps = {};
export default React.memo(Profile);
