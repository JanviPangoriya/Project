//   return fetch(url, {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then((response) => {
//       response.json().then((data) => {
//           console.log("Response body ",data)
//        })
//     return response;
//   });
import React from 'react';

interface Props{

}

const SomeExtraCode:React.FC<Props>=(props) => {
    return(
        <>
        </>
    );

}

SomeExtraCode.defaultProps={
    
}
export default SomeExtraCode;