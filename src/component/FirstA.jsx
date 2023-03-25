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
    <div>
         <Firstname.Provider value={Data}>
         <button onClick={Submit}>Click</button>

         </Firstname.Provider> 

    </div>
  )
}

export {Firstname};
export default FirstA

