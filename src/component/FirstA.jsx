import React, { useState, createContext} from 'react'
import FirstB from './FirstB';
const Firstname=createContext();

const FirstA = () => {
   
    const [Data,SetData]=useState([])
      const Submit=()=>{
            fetch("https://jsonplaceholder.typicode.com/users")
              .then((res) => res.json())
              .then((result) => SetData(result));
          console.log(Data);
      }
  return (
    <>
         <Firstname.Provider value={Data}>
        
         <h1>Hello  You can Click on this Button And it will show User Name From userAPI</h1>
         <button style={{padding:"10px ",width:"100px"}} onClick={Submit}>Click</button>
         <FirstB/>
         </Firstname.Provider> 

    </>
  )
}

export {Firstname};
export default FirstA

