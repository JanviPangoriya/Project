import React, { memo } from 'react';

interface Props{

}

const TopNav:React.FC<Props>=(props) => {
    return(
        <div className="bg-gray-200 w-screen h-16 absolute">
        </div>
    );

}

TopNav.defaultProps={
    
}
export default memo(TopNav);