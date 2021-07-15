import React from 'react';
import { memo } from 'react';

interface Props{

}

const NotFound:React.FC<Props>=(props) => {
    return(
        <div className="bg-gradient-to-br from-blue-500 to-pink-200 font-bold py-80 px-96 justify-between w-screen h-screen">
        Sorry, Page you are looking for is not exist
        </div>
    );

}

NotFound.defaultProps={
    
}
export default memo(NotFound);