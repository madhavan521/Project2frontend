import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const EditVendor = () => {

  const naviagte =useNavigate()
  const [vendorName, setVendorName] = useState();
  const [email, setEmail] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const [location, setLocation] = useState();
    const {id}=useParams()

  useEffect(()=>{
    try{
      fetch(`https://project2backend-vysf.onrender.com/api/vendor/${id}`,{
          method:"GET",
          headers:{
              "Content-Type" :"application/json"
          },
          credentials:"include",
}
).then(res=>res.json())
.then(result=>
{
  setEmail(result.email)
  setLocation(result.location)
  setMobileNumber(result.mobileNumber)
  setVendorName(result.vendorName)
})
  }
catch(err){
  console.log(err)
  toast.error(err)
}
  },[id])

  const handleEditVendor = (e) => {
    e.preventDefault();
    const vendorData = { vendorName, email, mobileNumber, location };
    try{
        fetch(`https://project2backend-vysf.onrender.com/api/vendor/update/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type" :"application/json"
            },
            credentials:"include",
               body:JSON.stringify(vendorData)
 }
).then(res=>res.json())
.then(result=>{
    console.log(result)
    toast.success("Vendor Updated Successfully")


    setTimeout(() => {
        setEmail('')
        setLocation('')
        setMobileNumber('')
        setVendorName('')
        naviagte('/vendor')

        
    }, 1000);
})
    }
catch(err){
    console.log(err)
    toast.error(err)
}   
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg">
        <h2 className="mb-4 text-center">Edit Vendor Detail</h2>
        <form >
          <div className="mb-3">
            <label className="form-label">Vendor Name</label>
            <input
              type="text"
              className="form-control"
              value={vendorName}
              onChange={(e) => setVendorName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <input
              type="text"
              className="form-control"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Location</label>
            <textarea
              type="text"
              className="form-control"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
   
          <button type="submit" onClick={handleEditVendor} className="btn loginButton btn-primary w-100">
           Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditVendor;
