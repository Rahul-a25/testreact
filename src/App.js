// import React, { useState } from 'react'
// import "./App.css"

// const App = () => {
//   const[name,SetName]=useState();
//   const [fullname,SetFullName]=useState()
//   const [Lastname,SetLastName]=useState()
//   const [newlastname,Setnewlastname]=useState()
//   const [newchange,Setnewchange]=useState(
//     {
//       color:"black",
//       backgroundColor:"white"
//     }
//   )
//   const change=(e)=>{
//   console.log(e.target.value);
//   SetName(e.target.value)
//   }
//   const changelast=(e)=>{
//     console.log(e.target.value);
//     SetLastName(e.target.value)
//     }
//   const submit=()=>{
//     SetFullName(name)
//     Setnewlastname(Lastname)
//   }
// const themechange=()=>{
//   if(newchange.color==="black"){
//     Setnewchange({
//       color:"white",
//       backgroundColor:"black"
//     }
//     )
//   }
//   else{
//     Setnewchange({
//       color:'black',
//       backgroundColor:'white'
//     })
//   }    

  
// }
  
//   return (
//     <div style={newchange} className='main'>
//       <h1>Hello {fullname} {newlastname}</h1>
//       <input onChange={change} type="text" placeholder='Enter Your First Name' />
//       <input onChange={changelast} type="text" placeholder='Enter Your Last Name' />
//       <button onClick={submit}>Submit</button>
//       <button onClick={themechange}>Change Theme</button>

      
//     </div>
//   )
// }

// export default App

import React from 'react'
import Header from './Header'
import Main from './Main'
import FirstA from './component/FirstA.jsx'
import FirstB from './component/FirstB.jsx'
import FirstC from './component/FirstC.jsx'
import FirstD from './component/FirstD.jsx'



const App = () => {
  return (
    <div>
     
         <FirstA/>
         <FirstB/>
         <FirstC/>
         <FirstD/>
       
      {/* <Header/>
      <
      <Main/> */}
    </div>
  )
}

export default App

