import React from 'react';
import profile from '.././Asset/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';

const Order = () => {
    const Orders = [
        { "orderId": "ORD001", "date": "2025-01-01", "customer": "John Doe", "salesChannel": "Online", "destination": "New York", "items": "Laptop", "status": "Shipped" },
        { "orderId": "ORD002", "date": "2025-01-02", "customer": "Jane Smith", "salesChannel": "Offline", "destination": "Los Angeles", "items": "Office Chair", "status": "Delivered" },
        { "orderId": "ORD003", "date": "2025-01-03", "customer": "Alice Brown", "salesChannel": "Online", "destination": "Chicago", "items": "Smartphone", "status": "Processing" },
        { "orderId": "ORD004", "date": "2025-01-04", "customer": "Bob White", "salesChannel": "Offline", "destination": "Houston", "items": "Running Shoes", "status": "Shipped" },
        { "orderId": "ORD005", "date": "2025-01-05", "customer": "Emily Davis", "salesChannel": "Online", "destination": "Phoenix", "items": "Microwave Oven", "status": "Delivered" },
        { "orderId": "ORD006", "date": "2025-01-06", "customer": "Michael Johnson", "salesChannel": "Offline", "destination": "San Antonio", "items": "Smartwatch", "status": "Shipped" },
        { "orderId": "ORD007", "date": "2025-01-07", "customer": "Sarah Lee", "salesChannel": "Online", "destination": "San Diego", "items": "Dining Table", "status": "Delivered" },
        { "orderId": "ORD008", "date": "2025-01-08", "customer": "David Wilson", "salesChannel": "Offline", "destination": "Dallas", "items": "Blender", "status": "Processing" },
        { "orderId": "ORD009", "date": "2025-01-09", "customer": "Sophia Clark", "salesChannel": "Online", "destination": "Miami", "items": "Refrigerator", "status": "Shipped" },
        { "orderId": "ORD010", "date": "2025-01-10", "customer": "James Miller", "salesChannel": "Offline", "destination": "Atlanta", "items": "Headphones", "status": "Out for Delivery" },
        { "orderId": "ORD011", "date": "2025-01-11", "customer": "Olivia Martinez", "salesChannel": "Online", "destination": "Seattle", "items": "Sofa Set", "status": "Delivered" },
        { "orderId": "ORD012", "date": "2025-01-12", "customer": "Daniel Moore", "salesChannel": "Offline", "destination": "Denver", "items": "Tablet", "status": "Processing" },
        { "orderId": "ORD013", "date": "2025-01-13", "customer": "Emma Taylor", "salesChannel": "Online", "destination": "Boston", "items": "Washing Machine", "status": "Shipped" },
        { "orderId": "ORD014", "date": "2025-01-14", "customer": "Lucas Anderson", "salesChannel": "Offline", "destination": "Detroit", "items": "Coffee Maker", "status": "Out for Delivery" },
        { "orderId": "ORD015", "date": "2025-01-15", "customer": "Mia Jackson", "salesChannel": "Online", "destination": "Charlotte", "items": "Air Conditioner", "status": "Delivered" }
    ];

    return (
        <>
          <div className="row">
                                    <h4 className='text-primary ms-2 mt-1'>  
                           <FontAwesomeIcon icon={faArrowLeft}  style={{color:"#4B50A3"}}  />  
                               <Link to='/dashboard' className="text-decoration-none" style={{color:"#4B50A3"}}>Back to Dashboard</Link>   
                             </h4>
                              </div>
        <div className="container-fluid card m-2">
            <div className="row my-3">
                <div className="col-5">
                    <h3 className=' ms-2' style={{color:"#4B50A3"}}>Orders</h3>
                </div>
                <div className="col-7">
                    <div className='d-flex justify-content-end'>
                        <button className='btn text-white  me-4 mb-2' style={{background:"#4B50A3"}}>+ New Order</button>
                        <p className='mt-1' >
                            <img src={profile} width="35px" className='' style={{borderRadius:"40px"}} height="35px" alt="" />
                            <span className=' mx-2'>Usename</span>
                        </p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row my-3">
                <div className="col-4">
                    <input type="text" className="form-control" placeholder="Search..." />
                </div>
                <div className="col-8 d-flex justify-content-end align-items-end">
                <select name="Sales" className="form-select" style={{ width: "170px" }} id="">
                        <option value="">Date</option>
                    </select>
                    <select name="Sales" className="form-select" style={{ width: "170px" }} id="">
                        <option value="">Status</option>
                    </select>
                     <select name="Sales" className="form-select" style={{ width: "170px" }} id="">
                        <option value="">Products</option>
                    </select>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col">
                    <div className="shadow-sm">
                        <div>
                            <table className="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr className="text-center">
                                        <th><input type="checkbox" /></th>
                                        <th>Order Id</th>
                                        <th>Date</th>
                                        <th>Customer</th>
                                        <th>Sales Channel</th>
                                        <th>Destination</th>
                                        <th>Items</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Orders.map((order) => (
                                            <tr key={order.orderId} className="text-center my-3">
                                                <td><input type="checkbox" /></td>
                                                <td>{order.orderId}</td>
                                                <td>{order.date}</td>
                                                <td>{order.customer}</td>
                                                <td>{order.salesChannel}</td>
                                                <td>{order.destination}</td>
                                                <td>{order.items}</td>
                                                <td><button className='btn btn-danger' style={{ borderRadius: "30px" }}>{order.status}</button></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div></>
    );
};

export default Order;
