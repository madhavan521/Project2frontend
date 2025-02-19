import React, { useContext, useState } from 'react';  
import { ManagerContext } from '../Components/Context/ManagerContext';  
import Profile from '../Asset/man.png'; 
import { AdminContext } from '../Components/Context/AdminContext' ;
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { StaffContext } from './Context/StaffContext';

const ManagerProfile = () => {  
  const { manager } = useContext(ManagerContext);   
  const {admin } = useContext(AdminContext)
  const {staff} =useContext(StaffContext)
  const navigate = useNavigate()

   const handleLogout=()=>{
    try{
      fetch('https://project2backend-vysf.onrender.com/api/auth/manager/logout' || "https://project2backend-vysf.onrender.com/api/auth/admin/logout" || "https://project2backend-vysf.onrender.com/api/auth/staff/logout" ,{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        credentials:"include"
      })
      .then(res=>{
        console.log("Logout Successfully")
        toast.success("Logout Successfully")
        setTimeout(() => {
          navigate('/')
          window.location.reload()
          
        }, 1500);
      })

    }
    catch(err){
      console.error(err)
      toast.error(err.message)
    }
   }


  return (  
    <div>  
      <div className="container  d-flex justify-content-center align-item-center">  
        <div className="row my-5 card" style={{ width: "300px" }}>  
          <div className='d-flex justify-content-center align-item-center'>  
            <img src={Profile} alt="Profile" height='100px' width='100px' />  
          </div>  
          <div className="card m-2" style={{ width: "285px" }}>  
            <h6 className='text-center my-3 text-primary'>
            <strong  className="text-dark " > Username : </strong>{admin?.username || manager?.username || staff?.username || "N/A"} </h6>  
            <h6 className='text-center my-3 text-primary'>
            <strong  className="text-dark" > Fullname : </strong>{admin?.fullname || manager?.fullname || staff?.fullname || "N/A"}</h6>
            <h6 className='text-center my-3 text-primary'>
             <strong  className="text-dark">  Email :</strong> {admin?.email || manager?.email || staff?.email || "N/A"}</h6> 
{/*          
             <h6 className='text-center my-3 text-primary'> <strong  className="text-dark">  Mobile Number :</strong> {admin?.Profile[0].phone || manager?.email ||"N/A"}</h6>  
             <h6 className='text-center my-3 text-primary'> <strong  className="text-dark"> Location : </strong> {admin?.Profile[0].location || manager?.email || "N/A"}</h6>  
             <h6 className='text-center my-3 text-primary'>  <strong className="text-dark">  Shop Name :</strong>{admin?.Profile[0].shopname || manager?.email || "N/A"}</h6> */}
            <button className='btn loginButton text-light' onClick={handleLogout} >  
              Logout
            </button>  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default ManagerProfile;