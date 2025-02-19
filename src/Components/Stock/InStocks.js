import React, { useEffect, useState } from 'react';  
import { FaTrash,FaEdit } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const InStock = () => {  
    const [history, setHistory] = useState([]);  

    useEffect(() => {  
        fetch('https://project2backend-vysf.onrender.com/api/stock/get', {  
            method: "GET",  
            headers: {  
                "Content-Type": "application/json"  
            },  
            credentials: "include"  
        })  
        .then(res => {  
            if (!res.ok) {  
                throw new Error('Network response was not ok');  
            }  
            return res.json();  
        })  
        .then(result => {  
            console.log(result); 
            setHistory(result); 
        })  
        .catch(err => {  
            console.error(err); 
        });  
    }, []);  


    const handleDelete=(id)=>{
       fetch(`https://project2backend-vysf.onrender.com/api/stock/delete/${id}`, {  
            method: "DELETE",  
            headers: {  
                "Content-Type": "application/json"  
            },  
            credentials: "include"  
        })  
        .then(res => res.json())  
        .then(result => {  
            console.log(result); 
           toast.success("Item Deleted Successfully")
        })  
        .catch(err => {  
            console.error(err); 
            toast.error(err)
        });  
    }

  


    return (  
        <div className="mt-5">
        <h2 className="mb-3 text-center " style={{color:"#4B50A3"}}> Stock </h2>
        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered">
          <thead className='table-primary text-center'>  
           <tr> <th>S.no</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Vendor</th>
                <th>Edit</th>
                <th>Delete</th>
                
              
              </tr>
            </thead>
            <tbody>
              {history.map((item, index) => (
                <tr key={item._id} className="align-middle text-center ">
                <td>{index+1}</td>
                  <td>{item.productName}</td>
                  <td>{item.category}</td>
                  <td>{item.quantity}</td>
                  <td>{item.vendor}</td>
                 
                  <td>
                  <Link to={`/instock/${item._id}`} ><FaEdit style={{color:"#4B50A3"}}  className='ms-2 mt-2'/></Link></td>
                  <td> <FaTrash  className='ms-2 mt-2' onClick={()=>handleDelete(item._id)}  style={{color:"#4B50A3"}} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> 
    );  
};  

export default InStock;