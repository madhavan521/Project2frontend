import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';
import man from '../../Asset/man.png'
import { FaEdit, FaTrash } from 'react-icons/fa';

const AllVendor = () => {
const [vendor,setVendor] =useState([''])

useEffect(()=>{ 
 try{
    fetch("https://project2backend-vysf.onrender.com/api/vendor/get",{
        method:"GET",
        headers:{
            "Content-Type" :"application/json"
        },
        credentials:"include",
    })
    .then(res=>res.json())
    .then(result=>{
      console.log(result)
      setVendor(result)

})
 }
 catch(err){
    console.log(err)
    toast.error(err)
 }
},[])

const handleDelete =(id)=>{
 try{
  fetch(`https://project2backend-vysf.onrender.com/api/vendor/delete/${id}`,{
      method:"DELETE",
      headers:{
          "Content-Type" :"application/json"
      },
      credentials:"include",
  })
  .then(res=>res.json())
  .then(result=>{
    console.log(result)
     toast.success("Vendor Deleted Successfully")

})
}
catch(err){
  console.log(err)
  toast.error(err)
}
}



  return (
     <div className="container-fluid bg-grey">  
         <div className="row my-3">
          <h4 className="text-center" style={{color:"#4B50A3"}}>VENDORS</h4>
         </div>
    
          <div className="row my-2">  
            {vendor.map((item, index) => (  
              <div className="col-md-6 col-lg-4 mb-3" key={item._id}>  
                  <div className="card text-center p-4 shadow-sm">  
                    <div className='text-center'><img src={man} width="50px" height="50px" /></div>  
                                <Link to={`/vendor/${item._id}`} style={{ textDecoration: "none" }}>  
    <h5 className="mt-3 mb-1 text-dark">{item.vendorName}</h5>   
                    <p className="text-muted">{item.email}</p> 
                      </Link> 
                   <div className="row">
                    <div className="col-6">
                     <Link to={`/vendor/edit/${item._id}`}> <FaEdit style={{color:"#4B50A3" ,width:"20px" , height:"20px"}}    />
                   </Link> </div>
                    <div className="col-6">
                      <FaTrash style={{color:"#4B50A3" ,width:"20px" , height:"20px"}} onClick={(id)=>handleDelete(item._id)}  />
                    </div>
                   </div>

                  </div>  
               
              </div>  
            ))}  
          </div>  
        </div> 
  );
}

export default AllVendor;
