import React, { useEffect, useState, createContext} from 'react'
import FirstD from './FirstD';
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
        
         <h1>Hello Kabir Sir You can Click on this Button</h1>
         <button style={{padding:"10px ",width:"100px"}} onClick={Submit}>Click</button>
         <FirstD/>
         </Firstname.Provider> 

    </>
  )
}

export {Firstname};
export default FirstA

