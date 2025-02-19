import React from "react";  
import { Link } from "react-router-dom";  
import { FaClipboardList, FaBoxes, FaShoppingCart,FaPlusCircle ,FaHistory, FaHome, FaDollarSign } from "react-icons/fa";  

const AdminDashboard = () => {  
  const data = [  
    {  
      name: "In-Stocks",  
      description: "Monitor available stock ",  
      icon: <FaBoxes size={50} color="#dc3545" />,  
      link: "/instock",  
    },  
    {  
      name: "Food Products",  
      description: "View and manage all food products ",  
      icon: <FaClipboardList size={50} color="#ffc107" />,  
      link: "/food",  
    },  
    {  
      name: "Account Sales",  
      description: "Manage all sales accounts",  
      icon: <FaDollarSign size={50} color="#28a745" />,  
      link: "/admin/account-sales",  
    },  
    {  
      name: "Purchases",  
      description: "Manage all purchase ",  
      icon: <FaShoppingCart size={50} color="#007bff" />,  
      link: "/addstock",  
    }, 
     {  
          name: "Add Food Products",  
          description: "Add new food products",  
          icon: <FaPlusCircle size={50} color="#28a745" />,  
          link: "/createfood",  
        }, 
        {  
          name: "Purchase History",  
          description: "View the history of purchases made",  
          icon: <FaHistory size={50} color="#17a2b8" />, 
          link: "/stockhistory",  
      } 
  ];  

  return (  
    <div className="container-fluid bg-grey">  
      {/* Header Section */}  
      <div className="row my-3">  
        <h4 className="text-center" style={{ color: "#4B50A3" }}>  
          ADMIN DASHBOARD   
        </h4>  
        <div className="col-6 mt-1 d-flex justify-content-end align-items-center">   
        </div>  
      </div>  

      <div className="row my-2">  
        {data.map((item, index) => (  
          <div className="col-md-4 col-lg-4 mb-3" key={index}>  
            <Link to={item.link} style={{ textDecoration: "none" }}>  
              <div className="card text-center p-4 shadow-sm">  
                <div>{item.icon}</div>  
                <h5 className="mt-3 mb-1 text-dark">{item.name}</h5>  
                <p className="text-muted">{item.description}</p>  
              </div>  
            </Link>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default AdminDashboard;