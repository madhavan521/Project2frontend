import React from "react";  
import { Link } from "react-router-dom";  
import { FaClipboardList, FaUserCircle, FaHome, FaUsers, FaBoxes, FaPlusCircle, FaShoppingCart, FaHistory, FaUtensils, FaUserPlus, FaListUl } from "react-icons/fa";
const ManagerDashboard = () => {  
  const data = [  
    {  
      name: "In-Stocks",  
      description: "Monitor available stock levels for all products",  
      icon: <FaBoxes size={50} color="#dc3545" />,  
      link: "/instock",  
    },  
    {  
      name: "Food Products",  
      description: "View and manage all food products in inventory",  
      icon: <FaUtensils size={50} color="#ffc107" />,  
      link: "/food",  
    },  
    {  
      name: "Add Vendors",  
      description: "Add new vendors to your database",  
      icon: <FaUserPlus size={50} color="#28a745" />,  
      link: "/addvendor",  
    },  
    {  
      name: "Vendors List",  
      description: "View the list of all registered vendors",  
      icon: <FaListUl size={50} color="#007bff" />,  
      link: "/vendor",  
    },   
 
     {  
          name: "Add Food Products",  
          description: "Add new food products",  
          icon: <FaListUl size={50} color="#28a745" />,  
          link: "/createfood",  
        }, 
        {  
          name: "Purchase History",  
          description: "View the history of purchases made",  
          icon: <FaListUl size={50} color="#17a2b8" />, 
          link: "/stockhistory",  
      }, 
    {  
      name: "Staff List",  
      description: "View the list of all staff members",  
      icon: <FaUsers size={50} color="#17a2b8" />,  
      link: "/manager/staff-list",  
    },  
  ];  

  return (  
    <div className="container-fluid bg-grey">  
     <div className="row my-3">
      <h4 className="text-center" style={{color:"#4B50A3"}}>MANAGER DASHBOARD</h4>
     </div>

      <div className="row my-2">  
        {data.map((item, index) => (  
          <div className="col-md-6 col-lg-4 mb-3" key={index}>  
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

export default ManagerDashboard;
