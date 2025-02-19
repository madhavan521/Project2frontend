import React from 'react';  

const SalesOrder = () => {  
    const SalesOrders = [  
        { "productName": "Laptop", "orderCode": "ORDER001", "category": "Electronics", "quantity": 2, "totalPrice": "$1500", "date": "2025-01-01" },  
        { "productName": "Office Chair", "orderCode": "ORDER002", "category": "Furniture", "quantity": 5, "totalPrice": "$750", "date": "2025-01-02" },  
        { "productName": "Smartphone", "orderCode": "ORDER003", "category": "Electronics", "quantity": 3, "totalPrice": "$2100", "date": "2025-01-03" },  
        { "productName": "Running Shoes", "orderCode": "ORDER004", "category": "Footwear", "quantity": 4, "totalPrice": "$400", "date": "2025-01-04" },  
        { "productName": "Microwave Oven", "orderCode": "ORDER005", "category": "Appliances", "quantity": 1, "totalPrice": "$200", "date": "2025-01-05" },  
        { "productName": "Smartwatch", "orderCode": "ORDER006", "category": "Electronics", "quantity": 6, "totalPrice": "$900", "date": "2025-01-06" },  
        // { "productName": "Dining Table", "orderCode": "ORDER007", "category": "Furniture", "quantity": 1, "totalPrice": "$600", "date": "2025-01-07" },  
    ];  

    return (  
        <div className="container-fluid card m-2">  
            <div className="row my-3">  
                <div className="col-6">  
                    <h3 className=" ms-2" style={{color:"#4B50A3"}}>Sales Orders</h3>  
                </div>  
                <div className="col-6">  
                    <div className="d-flex justify-content-end">  
                        <button className="btn text-white me-2" style={{background:"#4B50A3"}}>+ New Order</button>  
                    </div>  
                </div>  
            </div>  
            <hr />  
            <div className="row my-3">  
                <div className="col-4">  
                    <input type="text" className="form-control" placeholder="Search..." />  
                </div>  
                <div className="col-8 d-flex justify-content-end align-items-end">  
                    <select name="Date" className="form-select" style={{ width: "170px" }} id="">  
                        <option value="">Date</option>  
                    </select>  
                    <select name="Category" className="form-select" style={{ width: "170px" }} id="">  
                        <option value="">Category</option>  
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
                                        <th>Product Name</th>  
                                        <th>Order Code</th>  
                                        <th>Category</th>  
                                        <th>Quantity</th>  
                                        <th>Total Price</th>  
                                        <th>Date</th>  
                                    </tr>  
                                </thead>  
                                <tbody>  
                                    {  
                                        SalesOrders.map((order) => (  
                                            <tr key={order.orderCode} className="text-center my-3">  
                                                <td><input type="checkbox" /></td>  
                                                <td>{order.productName}</td>  
                                                <td>{order.orderCode}</td>  
                                                <td>{order.category}</td>  
                                                <td>{order.quantity}</td>  
                                                <td>{order.totalPrice}</td>  
                                                <td>{order.date}</td>  
                                            </tr>  
                                        ))  
                                    }  
                                </tbody>  
                            </table>  
                        </div>  
                    </div>  
                </div>  
            </div>  
        </div>  
    );  
};  

export default SalesOrder;