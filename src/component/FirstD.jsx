import React,{useContext} from 'react'
import { Firstname } from './FirstA';

const FirstD = () => {
    const result=useContext(Firstname);
    if(!result){
        return null
    }
  console.log(result);
  return (
    <>
      <div>
       <ul>
        {
            result.map((res)=><li>{res.name}</li>)
            
        }
        
        
       </ul>
     </div> 
    </>
  )
}

export default FirstD
