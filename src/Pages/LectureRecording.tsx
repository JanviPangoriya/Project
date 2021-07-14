import React from 'react';
import { memo } from 'react';
import { Link, useParams } from 'react-router-dom';

interface Props{

}

const LectureRecording:React.FC<Props>=(props) => {
    const{lectureNumber,batchNumber} = useParams<any>();
    return(
        <>
        <div className="pt-40 pl-24 text-3xl font-bold pb-5 bg-gradient-to-r from-green-300 to-red-400 w-screen">
        You're looking recording of : <br/> <span className="font-semibold text-2xl uppercase mt-7 block "> lecture  -  {lectureNumber} <br/><br />  batch - {batchNumber} </span> 
        </div>
         <div className="absolute text-xl ml-80 mt-96 pt-20 space-y-5">
         <div>
         Want to see more Recordings? 

            <Link to="/recordings">
            
            <button className="pl-4   text-white font-bold hover:text-red-600">
            Recordings
            </button>
            </Link>
         </div>
         </div>
         </>
    );

}

LectureRecording.defaultProps={
    
}
export default memo(LectureRecording);