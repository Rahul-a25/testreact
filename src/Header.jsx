import React from 'react'

const Header = () => {
  return (
    
         <div style={{width:"100%", height:"50px"  ,backgroundColor:"gray", display:"flex"}}>
                  <div style={{width:"40%",fontSize:"40px", backgroundColor:"red",display:"flex",justifyContent:"center",alignItems:"center", }}>Logo</div>
                  <div style={{width:"60%",backgroundColor:"green",display:"flex",justifyContent:"center",alignItems:"center",}}>
                    <ul style={{display:"flex",listStyleType:"none",justifyContent:"center",alignItems:"center", margin:"0px 20px"}}>
                       <li style={{margin:"0px 30px",fontSize:"25px",marginLeft:"50px"}}>Home</li>
                       <li style={{margin:"0px 30px",fontSize:"25px",marginLeft:"50px"}}>About</li>
                       <li style={{margin:"0px 30px",fontSize:"25px",marginLeft:"50px"}}>Menu</li>
                       <li style={{margin:"0px 30px",fontSize:"25px",marginLeft:"50px"}}>Order</li>
                       <li style={{margin:"0px 0px",fontSize:"25px",marginLeft:"50px",}}>Contact</li> 
                        </ul>
                    </div>
            </div>
        
  
  )
}

export default Header
