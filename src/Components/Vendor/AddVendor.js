
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import toast from "react-hot-toast";

const AddVendor = () => {
  const [vendorName, setVendorName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [location, setLocation] = useState("");

  const handleVendor = (e) => {
    e.preventDefault();
    const vendorData = { vendorName, email, mobileNumber, location };
    try{
        fetch("https://project2backend-vysf.onrender.com/api/vendor/create",{
            method:"POST",
            headers:{
                "Content-Type" :"application/json"
            },
            credentials:"include",
               body:JSON.stringify(vendorData)
 }
).then(res=>res.json())
.then(result=>{
    console.log(result)
    toast.success("Vendor Added Successfully")

    setTimeout(() => {
        setEmail('')
        setLocation('')
        setMobileNumber('')
        setVendorName('')
        
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
        <h2 className="mb-4 text-center">Add Vendor</h2>
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
   
          <button type="submit" onClick={handleVendor} className="btn loginButton btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVendor;
