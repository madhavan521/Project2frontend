import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profileImg from '../../Asset/inman.png'
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";   
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const IndividualVendor = () => {
 const {id}=useParams()  
  const [vendor,setVendor] =useState(null)

  useEffect(()=>{ 
   try{
      fetch(`https://project2backend-vysf.onrender.com/api/vendor/${id}`,{
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
  },[id])

  const handleDelete = async (productId, username) => {  
    try {  
      const response = await fetch(`https://project2backend-vysf.onrender.com/api/vendor/product/delete/${productId}`, {  
        method: "DELETE",  
        headers: {  
          "Content-Type": "application/json",  
        },  
        credentials: "include",  
        body: JSON.stringify({ username }),  
      });  
  
      if (!response.ok) {  
        throw new Error("Failed to delete product");  
      }  
  
      toast.success("Successfully Deleted");  
  
      setVendor((prevVendor) => {  
        if (!prevVendor) return prevVendor;  
  
        return {  
          ...prevVendor,  
          Products: prevVendor.Products?.filter((product) => product._id !== productId) || [],  
        };  
      });  
    } catch (err) {  
      console.error(err);  
      toast.error(err.message || "An error occurred during deletion");  
    }  
  };


  return (
    <div className="container mt-4 d-flex justify-content-center">  
    <div className="p-4 row shadow-lg text-center bg-light" style={{ maxWidth: "800px", borderRadius: "15px" }}>  
      <div className="d-flex justify-content-center align-items-center col-lg-6 col-md-6 col-sm-12">   
        <img   
          src={profileImg}   
          alt="Profile"   
          className="rounded-circle m-3 mt-4 border border-primary p-1 loginButton"   
          width="190"   
          height="190"   
        />  
      </div>  
      <div className="col-lg-6 col-md-6 col-sm-12">   
        <h4 className="mb-3 text-primary">Vendor Details</h4>  
        {vendor ? (   
          <ul className="list-group text-start" key={vendor._id}>  
            <li className="list-group-item border-0"><strong>Vendor Name:</strong> {vendor.vendorName}</li>  
            <li className="list-group-item border-0"><strong>Email:</strong> {vendor.email}</li>  
            <li className="list-group-item border-0"><strong>Mobile:</strong> {vendor.mobileNumber}</li>  
            <li className="list-group-item border-0"><strong>Location:</strong> {vendor.location}</li>  
          </ul>  
        ) : (  
          <p>Loading...</p>   
        )}  
      </div>  
      <div className="col-12 mt-4">  
        <hr />
        <div className="d-flex justify-content-between align-items-center">  
          <h4 className="text-start">Products</h4>
         <Link to='/vendorproduct'> <button className="btn btn-success"><FaPlus className="me-2" />Add Product</button></Link>
        </div>
        {vendor && vendor.Products && vendor.Products.length > 0 ? (
          <table className="table mt-3 table-striped table-bordered">  
            <thead className="table-dark">  
              <tr>  
                <th>#</th>  
                <th>Product</th>  
                <th>Price</th>  
                <th>Delete</th>  
              </tr>  
            </thead>  
            <tbody>  
              {vendor.Products.map((item, index) => (  
                <tr key={item._id}>  
                  <td>{index + 1}</td>  
                  <td>{item.vendorProduct}</td>  
                  <td>{item.price}</td>  
               
                  <td><button className="btn btn-danger" onClick={()=>handleDelete(item._id ,vendor.vendorName)}><FaTrash /></button></td>  
                </tr>  
              ))}  
            </tbody>  
          </table>
        ) : (
          <h5 className="text-muted text-center mt-3">No Products Available</h5>
        )} 
      </div>
    </div>  
  </div>  
  );
};

export default IndividualVendor;
