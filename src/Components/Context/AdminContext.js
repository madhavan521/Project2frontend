import React, { createContext, useEffect, useState } from 'react';


const AdminContext = createContext()

const AdminContextProvider = ({children}) => {
     const [admin,setAdmin] =useState(null)

   useEffect(()=>{
    try{
   fetch('https://project2backend-vysf.onrender.com/api/auth/admin/me' ,{
    method:"GET",
    headers:{
        "Content-Type": "application/json"
    },
    credentials:"include" })
  .then(res=>res.json())
  .then(result=>{
    console.log(result)
    setAdmin(result)
  })
}
 catch(err)
   {
        console.log(err)
    }
   },[])
  return (
    <div>
      <AdminContext.Provider value={{admin}}>
       {children}
      </AdminContext.Provider>
    </div>
  );
}

export { AdminContextProvider ,AdminContext};
