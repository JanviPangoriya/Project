import React from 'react';
import { memo } from 'react';
import { Link } from 'react-router-dom';

interface Props{

}

const Dashboard:React.FC<Props>=(props) => {
    return(
        <div className="pt-10">
        <div className="text-gray-800 pt-80 pl-20 font-bold">
            <div className="absolute top-40 text-5xl pl-10 uppercase text-transparent bg-gradient-to-br from-red-700 to-blue-500 bg-clip-text font-extrabold">
                Welcome to DashBoard Page
                </div>
                <div className="absolute ml-10 space-y-5">
            <div>
            Want to see Recordings? 
 
 <Link to="/recordings">
     
     <button className="pl-4 text-green-500 font-bold hover:text-red-600">
     Recordings
     </button>
 </Link>
            </div>
            <div>
            Don't Have an Account? 
 
 <Link to="/sign">
     
     <button className="pl-4 text-green-500 font-bold hover:text-red-600">
          SignUp
     </button>
 </Link>
            </div>
        </div>
        </div>
        </div>
    );

}

Dashboard.defaultProps={
    
}
export default memo(Dashboard);