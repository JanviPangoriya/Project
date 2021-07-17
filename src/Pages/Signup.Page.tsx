import { useFormik } from 'formik';
import React from 'react';
import { memo } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { HiLockClosed, HiUser} from 'react-icons/hi';
import { FaDotCircle } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import Input from '../Component/Input';
import * as yup from 'yup';
interface Props{

}

const Signup:React.FC<Props>=(props) => {
    const history = useHistory();
    const myform = useFormik({
      initialValues :{
        email:"",
        password:"",
        username:"",
      },
      validationSchema : yup.object().shape(
        {
          email:yup.string().required("Email is required field").email(),
          password: yup.string().required().min(6),
          username: yup.string().required().min(6),
        // ,({min}) =>
            // "Password should have atleset "+min+" characters."
        }
      ),
      onSubmit : (data) =>
      {
        console.log("form submitting ",data)
        setTimeout(()=>{
          history.push('/dashboard');
        },5000);
      }
      
    });
    
        return(
            <>
            <div className="lg:w-1/2">
              <div className="mx-0 md:mx-20 text-gray-400">
                      <div className="flex flex-col justify-center mt-5 py-3 px-12 ">
                          <h1 className="text-4xl leading-snug mb-2 tracking-wide text-gray-600">Get started with a <br />
free account</h1>
                          <div className="mb-10 text-md pb-1 font-semibold  text-gray-600">Already have an account? 
                              <Link to="/login" className="border-b-2 ml-2 border-blue-500 text-blue-500">
                                  Log in
                              </Link> </div>
                         <form className="" onSubmit={myform.handleSubmit}>
                         
             <Input 
           touched = {myform.touched.username}
           error = {myform.errors.username}
           text="username"
           id="username" 
           type="username" 
           required 
           {...myform.getFieldProps("username")}
           >
             <FaDotCircle className="mb-10 z-50 m-2 w-7 h-7 text-blue-500 absolute"></FaDotCircle>
           </Input>
           <Input 
           touched = {myform.touched.email}
           error = {myform.errors.email}
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
           touched = {myform.touched.password}
           error = {myform.errors.password}
           text = "Password"
           id="password"
            type="password" 
            autoComplete="new-password" 
            required 
           {...myform.getFieldProps("password")}
           >
             <HiLockClosed className="mb-10 z-50 m-2 w-7 h-7 text-blue-500 absolute"></HiLockClosed>
           </Input>
           <div className=" mt-2 mb-4">
      <div className="flex flex-row justify-start items-left">
    
      <label htmlFor="logeedIn" className="pl-2 mr-4 ">
      <input type="checkbox" name="logeedIn" id="logeedIn" className="w-6 h-4 focus:bg-red-600"/> I agree to the <span className="text-blue-500 text-md">terms and conditions </span></label>
      </div>
      </div>
            <div className="flex flex-col justify-start sm:flex-row sm:justify-between sm:items-center mt-5 ">
               <div className="flex-row flex ">
        <span className="mr-5 text-gray-600">Show Password</span>
        <div className="relative">
          <div className="mt-2 w-10 h-4 bg-gray-200 rounded-full shadow-inner"></div>
          <div className="absolute mt-2.5 w-5 h-5 bg-blue-500 rounded-full shadow -left-1 -top-1 transition"></div>
          
        </div>
      </div>
      
        <button  disabled={!myform.isValid}
        type="submit" className={"text-md w-28 px-3 mt-5 md:mt-0 py-1.5 rounded-md bg-blue-600 text-white shadow-2xl hover:shadow-none "} >
    Get Started
    </button>
      </div>
      
      {myform.isSubmitting && <FaSpinner className ="animate-spin mx-auto mt-2"></FaSpinner>}
      <div className="mt-16 text-justify text-gray-600">
    © 2020 All Rights Reserved. <span className="text-blue-500 font-bold text-md">Devslane</span> is a comapny.<span className="text-blue-500 font-bold text-md">Cookie Preferences <span className="text-gray-700 font-normal">,</span> Privacy<span className="text-gray-700 font-normal">,</span> and Terms.</span>
      </div>
    
                         </form>
    
                      </div>
                      </div>
            </div>
    
      
    
            </>
        );

}

Signup.defaultProps={
    
}
export default memo(Signup);