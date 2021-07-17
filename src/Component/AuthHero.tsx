import React, { memo } from 'react';

interface Props{

}

const AuthHero:React.FC<Props>=(props) => {
    return(
        <div className="hidden lg:block bg-gray-900 h-screen w-1/2">
        <div className="mt-60 mx-40 transform -rotate-45 text-8xl font-bold  bg-red-500 text-transparent outline-white bg-clip-text">
            Hero<br/>Section
        </div>
                </div>
    );

}

AuthHero.defaultProps={
    
}
export default memo(AuthHero);