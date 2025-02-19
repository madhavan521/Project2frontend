import React, { createContext, useEffect, useState } from 'react';


const StaffContext = createContext()

const StaffContextProvider = ({children}) => {
     const [staff,setStaff] =useState(null)

   useEffect(()=>{
    try{
   fetch('https://project2backend-vysf.onrender.com/api/auth/staff/me' ,{
    method:"GET",
    headers:{
        "Content-Type": "application/json"
    },
    credentials:"include" })
  .then(res=>res.json())
  .then(result=>{
    console.log(result)
    setStaff(result)
  })
}
 catch(err)
   {
        console.log(err)
    }
   },[])
  return (
    <div>
      <StaffContext.Provider value={{staff}}>
       {children}
      </StaffContext.Provider>
    </div>
  );
}

export{ StaffContextProvider ,StaffContext};
