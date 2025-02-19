import React, { useEffect, useState } from 'react';  
import { FaTrash,FaEdit } from 'react-icons/fa';

const StockHistory = () => {  
    const [history, setHistory] = useState([]);  

    useEffect(() => {  
        fetch('https://project2backend-vysf.onrender.com/api/stock/history/get', {  
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
            setHistory(result[0]?.stockHistory || []); 
        })  
        .catch(err => {  
            console.error(err); 
        });  
    }, []);  

  


    return (  
        <div className="mt-5">
        <h2 className="mb-3 text-center " style={{color:"#4B50A3"}}>Purchase Stock History</h2>
        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered">
            <thead className="table-dark text-center" >
              <tr>
                <th>Product Name</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Vendor</th>
                <th>Date</th>
                <th>Time</th>
              
              </tr>
            </thead>
            <tbody>
              {history.map((item, index) => (
                <tr key={index} className="align-middle text-center">
                  <td>{item.productName}</td>
                  <td>{item.category}</td>
                  <td>{item.quantity}</td>
                  <td>{item.vendor}</td>
                  <td>{item.date || 'N/A'}</td>
                  <td>{item.time || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> 
    );  
};  

export default StockHistory;