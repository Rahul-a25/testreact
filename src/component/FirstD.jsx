import React,{useContext} from 'react'
import { Firstname } from './FirstA';

const FirstD = () => {
    const result=useContext(Firstname);

  return (
    <>
      <div>
       <ul>
        <li>{result.name}</li>
       </ul>
     </div> 
    </>
  )
}

export default FirstD
