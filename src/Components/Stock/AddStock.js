import React, { useEffect, useState } from 'react';  
import toast from 'react-hot-toast';

const AddStock = () => {  
    const [productName, setProductName] = useState('');  
    const [category, setCategory] = useState('');  
    const [quantity, setQuantity] = useState('');  
    const [vendorName, setVendorName] = useState('');  
    const [vendors,setVendors] =useState([])
    const handleStock = (e) => {  
        e.preventDefault();  
       
        const formData = {  
            productName,  
            category,  
           quantity: Number(quantity),  
        vendor: vendorName, 
        };  
     try{
       fetch('https://project2backend-vysf.onrender.com/api/stock/create',
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            credentials:"include",
            body:JSON.stringify(formData)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
            toast.success("Stock Added Successfully")
            setTimeout(() => {
                setProductName('');  
        setCategory('');  
        setQuantity('');  
        setVendorName('');  
      
            }, 500);
        }) 
     }
     catch(err){
        toast.error(err)
        console.log(err)
     }
     try{
        fetch('https://project2backend-vysf.onrender.com/api/stock/history/create',
         {
             method:"POST",
             headers:{
                 "Content-Type":"application/json"
             },
             credentials:"include",
             body:JSON.stringify(formData)
         })
         .then(res=>res.json())
         .then(result=>{
             console.log(result)
             toast.success("Stock Added Successfully")
             setTimeout(() => {
                 setProductName('');  
         setCategory('');  
         setQuantity('');  
         setVendorName('');  
       
             }, 500);
         }) 
      }
      catch(err){
         toast.error(err)
         console.log(err)
      }
     

     
    };  
    useEffect(() => {
        
        const fetchVendors = async () => {
            try {
                const response = await fetch("https://project2backend-vysf.onrender.com/api/vendor/get", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include",
                });
                if (!response.ok) throw new Error("Network response was not ok");
                const result = await response.json();
                setVendors(result);
            } catch (err) {
                console.error(err);
                toast.error("Error fetching vendors");
            }
        };
        fetchVendors();
    }, []);


    return (  
        
<div className="container mt-5">
      <div className="card p-4 shadow-lg">
        <h2 className="mb-4 text-center" style={{color:"#4B50A3"}} >Add Stocks</h2>
       <form >  
                <div className="mb-3">  
                    <label htmlFor="productName" className="form-label">Product Name</label>  
                    <input  
                        type="text"  
                        className="form-control"  
                        id="productName"  
                        value={productName}  
                        onChange={(e) => setProductName(e.target.value)}  
                        required  
                    />  
                </div>  
                <div className="mb-3">  
                    <label htmlFor="category" className="form-label">Category</label>  
                    <select
                            className="form-control"
                            name="vendorName"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        >
                            <option value="" disabled>Select Catagory</option>
                            <option value='Perishable'>Perishable</option>
                            <option value='Non-Perishable'>Non-Perishable</option>
                           
                        </select> 
                </div>  
                <div className="mb-3">  
                    <label htmlFor="quantity" className="form-label">Quantity</label>  
                    <input  
                        type="number"  
                        className="form-control"  
                        id="quantity"  
                        value={quantity}  
                        onChange={(e) => setQuantity(e.target.value)}  
                        required  
                    />  
                </div>  
                <div className="mb-3">  
                    <label htmlFor="vendor" className="form-label">Vendor</label>  
                    <select
                            className="form-control"
                            name="vendorName"
                            value={vendorName}
                            onChange={(e) => setVendorName(e.target.value)}
                            required
                        >
                            <option value="" disabled>Select Vendor</option>
                            {vendors.length === 0 ? (
                                <option disabled>No vendors available</option>
                            ) : (
                                vendors.map((vendor) => (
                                    <option key={vendor._id} value={vendor.vendorName}>
                                        {vendor.vendorName}
                                    </option>
                                ))
                            )}
                        </select> 
                </div>  
                <div className='d-flex justify-content-center align-item-center mt-2'> 
                <button type="submit" className="btn btn-primary loginButton" onClick={handleStock}>Add Stock</button>  </div>
            </form> 
      </div>
    </div>



     
    );  
};  

export default AddStock;