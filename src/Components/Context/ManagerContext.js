import React, { createContext, useEffect, useState } from 'react';


const ManagerContext = createContext()

const ManagerContextProvider = ({children}) => {
     const [manager,setManager] =useState(null)

   useEffect(()=>{
    try{
   fetch('https://project2backend-vysf.onrender.com/api/auth/manager/me' ,{
    method:"GET",
    headers:{
        "Content-Type": "application/json"
    },
    credentials:"include" })
  .then(res=>res.json())
  .then(result=>{
    console.log(result)
    setManager(result)
  })
}
 catch(err)
   {
        console.log(err)
    }
   },[])
  return (
    <div>
      <ManagerContext.Provider value={{manager}}>
       {children}
      </ManagerContext.Provider>
    </div>
  );
}

export {ManagerContextProvider,ManagerContext}
