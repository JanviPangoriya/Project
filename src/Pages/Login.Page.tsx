import React from 'react';
import { memo } from 'react';
import { Link } from 'react-router-dom';

interface Props{

}

const Login:React.FC<Props>=(props) => {
    return(
        <>
        <div className="text-gray-800 pt-80 pl-20 font-bold">
            <div className="absolute top-40 text-3xl pl-10 uppercase text-transparent bg-gradient-to-r from-yellow-300 to-blue-500 bg-clip-text font-extrabold">
                Welcome to login Page
                </div>
                </div>
            <br />
         <div className="mt-72 absolute ml-40 space-y-5">
            <div>
            Don't Have an Account? 
 
 <Link to="/sign">
     
     <button className="pl-4 text-green-500 font-bold hover:text-red-600">
          Signup
     </button>
 </Link>
            </div>
        
         </div>
        </>
    );

}

Login.defaultProps={
    
}
export default memo(Login);